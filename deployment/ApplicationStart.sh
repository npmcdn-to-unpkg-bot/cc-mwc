#!/bin/bash

cd /opt/ccmwc
nohup node app.js > /var/log/ccmwc.log 2>&1&
echo $! > /var/run/ccmwc.pid