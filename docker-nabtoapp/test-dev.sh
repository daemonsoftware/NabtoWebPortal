# This is the automation script to build and start docker container as well as middleware node application in Linux

#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

docker-compose build || exit 1
docker-compose up -d local-nginx || exit 1
docker-compose up -d local-dynamodb || exit 1

npm install
npm start