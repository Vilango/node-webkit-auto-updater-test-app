#!/bin/sh

# We may need to call this
# ulimit -n 8196

cd testapp
rm -rf node-webkit-auto-updater
npm install ../../node-webkit-auto-updater
cd ..
node index.js

open build/TestApp-1/TestApp/osx/TestApp.app
open build/TestApp-1/TestApp/osx/TestApp.app/Contents/Resources/app.nw/