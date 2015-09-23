from django.test import TestCase
from django_jsx.client import template_client
from django.conf import settings
from os.path import join


class MockSock():
    def send(self, message):
        pass

    def recv(self, buffer_size):
        return b''


def mock_connect():
    return MockSock()


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
        template_path = join(settings.TEMPLATE_DIR, 'test-component.js')
        actual = client.render_template(template_path, {}, {})
        expected = '<span>Test component</span>'
        self.assertEqual(actual, expected)

    def test_clean_context(self):
        """
        Make sure reserved items are removed, like the request object
        """
        context = {'request': 'remove this', 'foo': 'bar'}
        template_client.clean_context(context)
        self.assertDictEqual(context, {'foo': 'bar'})

    def test_clean_empty_context(self):
        """
        If `_clean_context` doesn't receive a dict, return an empty dict
        """
        actual = template_client.clean_context(None)
        expected = {}
        self.assertDictEqual(actual, expected)

    def test_fail_to_render_response(self):
        """
        Make sure an empty response is raised if no template was rendered
        """
        client = template_client.TemplateClient()
        template_path = join(settings.TEMPLATE_DIR, 'missing-template.js')
        with self.assertRaises(template_client.JsTemplateException):
            client.render_template(template_path, {}, {})

    def test_render_empty_template(self):
        """
        Make sure an empty response is raised if the template is empty
        """
        template_path = join(settings.TEMPLATE_DIR, 'empty-template.js')

        client = template_client.TemplateClient()
        client.connect = mock_connect

        with self.assertRaises(template_client.JsTemplateException):
            client.render_template(template_path, {}, {})
