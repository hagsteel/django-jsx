from django.test import TestCase
from django_jsx.client import template_client
from django.conf import settings
from os.path import join


class TestTemplateClient(TestCase):
    def test_make_none(self):
        """
        Test JSON conversion doesn't fail when object can't be serialized
        """
        class Foo():
            def __str__(self):
                return 'foo'

        foo = Foo()
        is_none = template_client._make_none(foo)
        self.assertIsNone(is_none)

    def test_render_template(self):
        """
        Test render a standard template
        """
        client = template_client.TemplateClient()
        template_path = join(settings.TEMPLATE_DIR, 'test_component.js')
        actual = client.render_template(template_path, {}, {})
        expected = '<span>Test component</span>'
        self.assertEqual(actual, expected)

    def test_clean_context(self):
        context = {'request': 'remove this', 'foo': 'bar'}
        template_client.clean_context(context)
        self.assertDictEqual(context, {'foo': 'bar'})

    def test_clean_empty_context(self):
        actual = template_client.clean_context(None)
        expected = {}
        self.assertDictEqual(actual, expected)
