from django.template import RequestContext
from django.test import TestCase
from django_jsx.templatetags import djangojs
from django_jsx.templatetags.djangojs import JsMissingTemplateDirException


class TestLoader(TestCase):
    def test_render_template(self):
        """
        Render a template with the template tag
        """
        context = RequestContext(request=None)
        template = djangojs.include_js(context, template_name='test-component.js')
        self.assertEqual(template, '<span>Test component</span>')

    def test_try_to_render_template_without_the_js_backend(self):
        """
        Raises JsMissingTemplateDirException if the backend is not specified
        """
        context = RequestContext(request=None)
        with self.settings(TEMPLATES=[{'BACKEND': 'django.template.backends.django.DjangoTemplates', 'DIRS': []}]):
            with self.assertRaises(JsMissingTemplateDirException):
                djangojs.include_js(context, template_name='test-component.js')
