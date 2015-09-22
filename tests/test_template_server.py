from django.test import TestCase
from django_jsx.server.template_server import TemplateServer


class TestTemplateServer(TestCase):
    def test_get_cwd(self):
        """
        This is a bad test
        """
        template_server = TemplateServer()
        cwd = template_server.get_cwd()
        self.assertIsNotNone(cwd)

    def test_get_options(self):
        """
        Test get options, including custom renderer
        """
        template_server = TemplateServer()
        options = template_server.get_options()
        expected = ['debug=False']
        self.assertEqual(options, expected)

        with self.settings(DJANGO_ISOMORPHIC_RENDERER='test.js'):
            options = template_server.get_options()
            expected = ['debug=False', 'renderer=test.js']
            self.assertListEqual(options, expected)
