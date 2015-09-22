from django.test import TestCase
from django.conf import settings
from django_jsx.template.backend import JsTemplate
from django_jsx.template.loaders import JsLoader


class FakeRequest():
    def __init__(self):
        self.META = {}

    @property
    def path(self):
        return '/'

    def build_absolute_uri(self):
        return 'http://localhost:8000/'


class TestJsTemplate(TestCase):
    def test_render_template_without_request(self):
        """
        Render a template
        """
        loader = JsLoader(engine=None)
        template_path = loader.load_template('test-component.js', template_dirs=[settings.TEMPLATE_DIR])[0]
        template = JsTemplate(template_path)
        result = template.render({})
        expected = '<span>Test component</span>'
        self.assertEqual(result, expected)

    def test_render_template_with_request(self):
        """
        Render a template with a (fake) request
        """
        loader = JsLoader(engine=None)
        template_path = loader.load_template('test-component.js', template_dirs=[settings.TEMPLATE_DIR])[0]
        template = JsTemplate(template_path)
        request = FakeRequest()
        result = template.render({}, request)
        expected = '<span>Test component</span>'
        self.assertEqual(result, expected)
