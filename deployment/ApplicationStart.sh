#!/bin/bash



# run app as background process.
# ignore hup
# log console logs to /var/log/ccmwc.log
cd /opt/ccmwc
nohup node app.js > /var/log/ccmwc.log 2>&1&

# keep record of pid
echo $! > /var/run/ccmwc.pid