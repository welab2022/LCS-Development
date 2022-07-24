#!/bin/bash

sudo apt -y update
sudo apt -y install python3.8
sudo apt -y install python3.8-venv
source venv/bin/activate
pip install selenium webdriver-manager 
