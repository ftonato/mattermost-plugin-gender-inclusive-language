#!/bin/bash

# Compiling the code
npm run build

# Generating the plugin.tar.gz
FOLDER=com.mattermost.gender-inclusive-language

mkdir -p $FOLDER
cp -r dist/main.js $FOLDER
cp plugin.json $FOLDER
tar -czvf plugin.tar.gz $FOLDER
rm -rf $FOLDER

echo "Plugin created"
