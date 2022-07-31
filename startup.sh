#!/bin/bash

# get the current directory
CURR_DIR=$(pwd)

echo -n "[Front-end] Starting ..."
cd $CURR_DIR/front-end/src
npm start >/dev/null 2>&1 &

echo " done!"

echo -n "[Back-end] Starting ..."
cd $CURR_DIR/back-end
go run main.go >/dev/null 2>&1 &

echo " done!"
