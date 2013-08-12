#!/bin/bash

# Run `chmod +x ./raspi-setup.sh` to compile

# Update the system
sudo apt-get upgrade
sudo apt-get update

# Install GIT
sudo apt-get install git-core

# install NodeJS
cd ~/
wget http://nodejs.org/dist/v0.10.13/node-v0.10.13-linux-arm-pi.tar.gz
cd /usr/local/
sudo tar xzvf ~/node-v0.10.13-linux-arm-pi.tar.gz --strip=1

# Install sandbox repository
cd ~/
mkdir workspace && cd workspace
git clone https://github.com/mcgaryes/raspberrypi-sandbox
cd raspberrypi-sandbox/node/
npm install