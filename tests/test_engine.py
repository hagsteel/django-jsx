from django.conf import settings
from django.test import TestCase
from django_jsx.template.engine import JsEngine


class TestEngine(TestCase):
    def test_get_template(self):
        engine = JsEngine(dirs=[settings.TEMPLATE_DIR])
        template = engine.get_template('test-component.js')
        self.assertIsNotNone(template)

    def test_get_template_including_appdirs(self):
        engine = JsEngine(dirs=[settings.TEMPLATE_DIR], app_dirs=True)
        template = engine.get_template('test-component.js')
        self.assertIsNotNone(template)
