# tic-tac-toe-service
Microservice API repository for tic-tac-toe game

How does it work? 
Firstly you should define your own configuration, by using this template and adding an .env file with the following variables:

-------------------------------

##### PORT = some port 
##### MONGO_DB_URI = some mongo db uri

-------------------------------
By default, the configuration is the following: 

-------------------------------

##### PORT = 3000
##### MONGO_DB_URI = mongodb://admin:pass@localhost:27017

-------------------------------
To run MongoDb, simply start Docker and run the following command:
    
#######  docker-compose start mongodb

This will create a default db with user: 'admin' and password: 'pass'. 
All actions are being stored in the default database called 'test.'

To run the app, simply do "npm install" (make sure you are using v12) and then run "npm run start". 

How to use the service? 

There are 3 endpoints available:
 1. '/*' - a GET request will show us if the app is up and running
 2. '/api/moves' - a POST request which will store all moves made by players for each session
 3. '/api/history' - a POST request which will return all moves history for current session


Docker containerization is also available. 
For this, simply run the docker-compose.yml, which uses the Dockerfile.
If you're using the default config as it is, the app should be available on the same host and port as it would be run with "npm run start".
