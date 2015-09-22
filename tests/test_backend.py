from django.conf import settings
from django.test import TestCase
from django_jsx.template.backend import JsTemplates, JsTemplate


class TestEngine(TestCase):
    def test_get_template(self):
        """
        Get a template by name
        """
        params = {
            'DIRS': [settings.TEMPLATE_DIR],
            'APP_DIRS': False,
            'NAME': 'backend',
            'OPTIONS': {}
        }

        templates = JsTemplates(params)
        template = templates.get_template('empty-template.js')
        self.assertIsInstance(template, JsTemplate)
