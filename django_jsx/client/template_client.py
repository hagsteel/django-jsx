#!/usr/bin/env python3.4
import socket
import json

server_address = '/tmp/template-server.sock'
BUFFER_SIZE = 8192


class TemplateClient():
    def connect(self):
        self.socket = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        self.socket.connect(server_address)

    def receive(self):
        message = []
        while True:
            data = self.socket.recv(BUFFER_SIZE)
            if not data:
                break
            message.append(data.decode())
        return ''.join(message)

    def render_template(self, file_path, context):
        data = {
            'template': file_path,
            'context': context
        }
        message = json.dumps(data).encode()
        self.socket.send(message)
        response = self.receive()
        return response
