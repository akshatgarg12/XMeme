#!/bin/bash
cd server

# Setup DB or any other environment variables you want to setup.

# activate nvm
. ~/.nvm/nvm.sh

npm install

npm run start