#!/usr/bin/env bash
cd javascript && npm install
cd ../demo/static/js && npm install
cd ../../ && ./manage.py runserver
