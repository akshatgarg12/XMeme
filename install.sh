#!/bin/bash


# Any installation related commands
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

# update local machine
sudo apt update

# install mongodb packages
sudo apt install -y mongodb-org

#start MongoDB
sudo systemctl start mongod

# display MongoDB running status
# sudo systemctl status mongod

# make mongodb as a service and restart on reboots
sudo systemctl enable mongod


curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

# . ~/.nvm/nvm.sh
sudo apt-get install -y npm
sudo apt install -y nodejs
# nvm install node
node -v
npm -v

# Any configuration related commands

