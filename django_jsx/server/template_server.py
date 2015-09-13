from subprocess import Popen
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
        self.proc = Popen(['node', 'template-server.js'], cwd=cwd, preexec_fn=os.setsid)


    def terminate(self):
        os.killpg(self.proc.pid, signal.SIGTERM)
