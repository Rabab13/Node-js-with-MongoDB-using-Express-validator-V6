// this file can use as middleware in our application 
const express = require('express')
// const {check , validationResult} = require('express-validator');
const {getPosts, createPost} = require('../controllers/post')
const {createPostValidator, validation} = require("../validator/index")

//here we can access to express router
const router = express.Router()

//create route for get method
router.get("/", getPosts)
//create route for post method to post on the backend
router.post("/post" , createPostValidator(),validation(), createPost);


module.exports= router;

