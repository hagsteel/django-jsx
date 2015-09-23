from django.conf import settings
from django.template import TemplateDoesNotExist
from django.test import TestCase
from django_jsx.template.engine import JsEngine
from django_jsx.template.loaders import JsLoader


class TestLoader(TestCase):
    def test_load_missing_template(self):
        engine = JsEngine(dirs=[settings.TEMPLATE_DIR])
        loader = JsLoader(engine)
        with self.assertRaises(TemplateDoesNotExist):
            loader.load_template_source('foo.js')

    def test_empty_template_dir_config(self):
        engine = JsEngine()
        loader = JsLoader(engine)
        with self.assertRaises(TemplateDoesNotExist):
            loader.load_template_source('foo.js')
