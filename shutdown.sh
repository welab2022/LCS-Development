#!/bin/bash

echo -n "[Front-end] Stopping ... "
pkill -9 node
echo "done!"

echo -n "[Back-end] Stopping ... "
pkill -9 main
echo "done!"
