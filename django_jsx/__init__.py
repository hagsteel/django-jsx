import atexit
from .server.template_server import TemplateServer

template_server = TemplateServer()

def kill_server():
    print('Closing template server')
    template_server.terminate()


template_server.start()
print('Start template server')

atexit.register(kill_server)
