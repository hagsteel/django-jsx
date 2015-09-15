from subprocess import Popen
from django.conf import settings
import os
import signal


class TemplateServer():
    def __init__(self):
        self.started = False

    def start(self):
        if self.started:
            return
        self.started = True

        cwd = os.path.join(
            os.path.dirname(__file__),
            '../../javascript/dist/'
        )

        renderer = 'default';
        for template_setting in settings.TEMPLATES:
            if template_setting.get('BACKEND') == 'django_jsx.template.backend.JsTemplates':
                renderer = template_setting.get('RENDERER') or renderer

        options = [
            'debug={}'.format(settings.DEBUG),
            'renderer={}'.format(renderer),
        ]

        self.proc = Popen(['node', 'template-server.js'] + options, cwd=cwd, preexec_fn=os.setsid)


    def terminate(self):
        os.killpg(self.proc.pid, signal.SIGTERM)
