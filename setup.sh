#!/usr/bin/env bash
cd javascript && npm install
cd ../demo && ./manage.py migrate
cd ../demo && ./manage.py makedata
cd ../demo && ./manage.py runserver