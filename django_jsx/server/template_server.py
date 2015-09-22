from subprocess import Popen
from django.conf import settings
import os
import signal


class TemplateServer():
    def __init__(self):
        self.started = False
        self.proc = None

    def get_cwd(self):
        pth = os.path.join(
            os.path.dirname(__file__),
            '../../javascript/dist/'
        )
        return pth

    def get_options(self):
        options = [
            'debug={}'.format(settings.DEBUG),
        ]
        renderer = getattr(settings, 'DJANGO_ISOMORPHIC_RENDERER', None)
        if renderer:
            options.append('renderer={}'.format(renderer))
        return options

    def start(self):
        if self.started:
            return
        self.started = True

        cwd = self.get_cwd()
        options = self.get_options()
        self.proc = Popen(['node', 'template-server.js'] + options, cwd=cwd, preexec_fn=os.setsid)

    def terminate(self):
        os.killpg(self.proc.pid, signal.SIGTERM)
