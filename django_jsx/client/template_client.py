#!/usr/bin/env python3.4
import socket
import json

server_address = '/tmp/template-server.sock'
BUFFER_SIZE = 8192


class JsTemplateException(Exception):
    pass


class TemplateClient():
    def render_template(self, file_path, context=None, render_static=False):
        return render_template(file_path, context, render_static)


def receive(sock):
    message = []
    while True:
        data = sock.recv(BUFFER_SIZE)
        if not data:
            break
        message.append(data.decode())
    return ''.join(message)


def render_template(file_path, context=None, render_static=False):
    sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    sock.connect(server_address)

    data = {
        'template': file_path,
        'render_static': render_static,
        'context': context
    }
    message = json.dumps(data).encode()
    sock.send(message)
    response = receive(sock)
    status = response[0]

    if status != '0':
        raise JsTemplateException(response[1:])

    return response[1:]
