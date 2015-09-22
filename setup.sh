#!/usr/bin/env bash
cd javascript && npm install
cd ../demo/static/js && npm install
cd ../demo && ./manage.py migrate
cd ../demo && ./manage.py runserver