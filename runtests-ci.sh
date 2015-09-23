#!/usr/bin/env bash

# Build js
cd ./javascript
npm run build
cd ..

cd ./tests/templates/
npm install react
cd ..
cd ..


# Start the template server
#node ./javascript/dist/template-server.js socketPath=./template-server.sock &

nohup bash -c "node ./javascript/dist/template-server.js socketPath=./template-server.sock 2>&1 &" && sleep 2
./runtests.sh
