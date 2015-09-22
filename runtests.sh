#!/usr/bin/env bash
dirname="$(dirname "$0")"
babel ./tests/template_src --out-dir ./tests/templates/

# Start the template server
node ./javascript/dist/template-server.js &

# Run the tests
py.test -s --cov-report term-missing --cov=django_jsx tests/

trap "kill -TERM -$$" SIGINT
