
<# this file is used run the application  in docker  using windows platform#>

$directory = (Get-Item -Path ".\" -Verbose).FullName
cd $directory

function cleanup {
  docker-compose down
}

cleanup


iex "docker-compose build"

iex "docker-compose up -d local-nginx"

iex "docker-compose up -d local-dynamodb"

iex "npm install"
iex "npm start"