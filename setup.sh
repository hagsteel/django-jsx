#!/usr/bin/env bash
cd javascript && npm install
cd ../demo/static/js && npm install && ./manage.py runserver
