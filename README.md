# Node-js-with-MongoDB-with-Express-validator-V6
How to create Node js server and use GET & POST methods to MongoDB database and using Express-validator V6 and test your req & res with Postman.

### Setup Dependencies
#### $ npm i express
#### $ npm i body-parser
#### $ npm i dotenv
#### $ npm i morgan
#### $ npm i mongoose
#### $ npm i express-validator

### Running the project
Go to directory file of the project and open Terminal then write

#### ``` npm run dev```

### Signup with MongoDB Atlas to use mongodb
Create free Cluster and create database password and username then copy the url from Connect Your Application window in order to add to MONGO_URI in .env file with thr port number.
[MongoDB Atlas](https://account.mongodb.com/account/login?n=%2Fv2%2F621ffa433d2afa2b6d6ed9aa&nextHash=%23clusters)


### Using postman to GET and POST at the MongoDB database
![GET](assest/get.png "Get all posts from database")
![POST](assest/post.png "Create new post to database")
![POST error](assest/error.png "Error massage while posting")