#!/usr/bin/env bash
# Build js
cd ./javascript
npm run build
cd ..

# Install react
cd ./tests/template_src/
npm install react
cd ..
cd ..

# Start the template server
node ./javascript/dist/template-server.js socketPath=./template-server.sock &

./runtests.sh
