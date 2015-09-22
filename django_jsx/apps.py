from django.apps import AppConfig
from django.conf import settings

from .server.template_server import TemplateServer
import atexit

template_server = TemplateServer()


class DjangoJsxConfig(AppConfig):
    name = 'django_jsx'
    verbose_name = "Django JSX"

    def ready(self):
        if getattr(settings, 'DJANGO_ISOMORPHIC_AUTOSTART', True):
            template_server.start()


def kill_server():
    if template_server.started:
        print('Closing template server')
        template_server.terminate()


atexit.register(kill_server)
