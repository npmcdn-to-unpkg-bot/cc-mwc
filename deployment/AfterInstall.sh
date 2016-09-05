#!/bin/bash



# install dependencies
cd /opt/ccmwc
npm install --production

# copy secure files
cp -rf ../secure/* ./
