from django.conf import settings
import socket
import json

_exclude_from_context = ['request', 'csrf_input', 'DEFAULT_MESSAGE_LEVELS', 'False', 'True', 'None', 'view']
server_address = getattr(settings, 'DJANGO_ISOMORPHIC_SOCKET_PATH', '/tmp/template-server.sock')
BUFFER_SIZE = 8192


def _make_none(obj):
    return None


class JsTemplateException(Exception):
    pass


def clean_context(context):
    if context is None:
        return {}

    for ex in _exclude_from_context:
        if ex in context:
            del context[ex]

    return context


class TemplateClient():
    def render_template(self, file_path, context=None, request_data=None):
        data = {
            'template': file_path,
            'request': request_data,
            'context': clean_context(context)
        }
        message = json.dumps(data, default=_make_none).encode()

        sock = self.connect()
        sock.send(message)
        response = self.receive(sock)

        if not response:
            raise JsTemplateException('Empty template response')

        status = response[0]

        if status != '0':
            raise JsTemplateException(response[1:])

        return response[1:]

    def connect(self):
        sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        sock.connect(server_address)
        return sock

    def receive(self, sock):
        message = []
        while True:
            data = sock.recv(BUFFER_SIZE)
            if not data:
                break
            message.append(data.decode())
        return ''.join(message)
