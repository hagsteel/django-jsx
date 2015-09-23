from django.conf import settings
from django.test import TestCase
from django_jsx.template.backend import JsTemplates, JsTemplate


class TestX(TestCase):
    def testx(self):
        print(settings.DJANGO_ISOMORPHIC_SOCKET_PATH)
