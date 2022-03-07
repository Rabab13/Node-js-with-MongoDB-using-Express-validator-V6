const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const postRoutes = require('./routes/post')  //bring all routes
const morgan = require('morgan')       //morgan is works as a middleware       
const mongoose = require('mongoose');  // import mongoose 
const expressValidator = require('express-validator')
const dotenv = require('dotenv');       // load env variables
dotenv.config()

//db connection
mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
console.log(`DB connection error: ${err.message}`)
});

//Middleware
//middleware is something happened in the middle between the start and the end of the program
//morgan gives us the response => GET / 304 9.671 ms - - and how it takes
app.use(morgan('dev'))
app.use(bodyParser.json())   // using bodyParser as middleware with json method
app.use('/', postRoutes)     // now this route works as a middleware
// app.use(expressValidator())



const port = 3000
app.listen(port , ()=> {
console.log(`Listening to port:${port}`)
})