from django.apps import AppConfig
from .server.template_server import TemplateServer
import atexit


template_server = TemplateServer()

class DjangoJsxConfig(AppConfig):
    name = 'django_jsx'
    verbose_name = "Django JSX"

    def ready(self):
        template_server.start()


def kill_server():
    print('Closing template server')
    template_server.terminate()


atexit.register(kill_server)
