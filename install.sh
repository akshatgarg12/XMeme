#!/bin/bash


# Any installation related commands
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

sudo apt update

sudo apt install -y mongodb-org

sudo apt-get install nodejs

sudo apt-get install npm

# Any configuration related commands

sudo systemctl start mongod

sudo systemctl enable mongod