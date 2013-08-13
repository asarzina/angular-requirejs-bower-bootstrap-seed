#!/bin/bash

#@author www.palbabit.com

#version should be something like 0.9.0beta or 0.9.0
version=$1
if [ -z $version ]; then
    echo "Please pass in a version number (es. sh dist-build.sh 0.0.1)"
    exit 1
fi

myDir=`cd \`dirname "$0"\`; pwd`

# Delete old dir
rm -rf ../dist/$version

# Create the version output dir
mkdir ../dist/$version

# Build the project
node ../app/bower_components/rjs/dist/r.js -o build.single.js

# Copy other files and directories
cd ../dist
cp -r ../app/bower_components $version
cp -r ../app/css $version
cp -r ../app/img $version
cp -r ../app/partials $version
cp ../app/index.html $version
cp ../app/robots.txt $version
mv js $version

cd ../build
