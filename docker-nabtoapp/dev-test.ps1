# This is the automation script to build and start docker container as well as middleware node application 
$directory = (Get-Item -Path ".\" -Verbose).FullName
cd $directory

# Cleanup all the present docker conatiner  
function cleanup {
  docker-compose down
}

# Calling cleanup function
cleanup

# Building docker container using 'docker-compose.yml'
iex "docker-compose build"

# Will Run local-nginx container
iex "docker-compose up -d local-nginx"

# Will Run local-dynamodb container
iex "docker-compose up -d local-dynamodb"

# install Node_Modules configured in 'package.json'
iex "npm install"

# Starting application using 'Server.js'
iex "npm start"