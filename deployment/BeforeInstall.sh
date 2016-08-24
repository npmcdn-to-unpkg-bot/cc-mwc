#!/bin/bash

# end current process
PID_FILE="/var/run/ccmwc.pid"
if [[ -e ${PID_FILE} ]]; then
	kill -9 $(cat ${PID_FILE}) || true
fi

# clear deployment folder
cd /opt
rm -rf ccmwc
