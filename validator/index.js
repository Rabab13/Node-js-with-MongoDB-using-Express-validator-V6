//How to create post validator using express-validator V6

// ...rest of the initial code omitted for simplicity.
const {check , validationResult} = require('express-validator');

//this sets the rules on the request body in the middleware
    exports.createPostValidator = () => {
    return [
        check("title", "write a title").notEmpty(),
        check("title", "Title must be between 4 to 150 character").isLength({
            min: 4, max: 150
        }),
        //check
        check("body", "write a body").notEmpty(),
        check("body", "Body must be between 4 to 2000 character").isLength({
            min: 4, max: 2000
        })]}
//while this function executes the actual rules against the request body
    exports.validation =  ()  => {
            return (req, res, next) => {
            const errors = validationResult(req);
            console.log(errors)
            // check if any of the request body failed the requirements set in createPostValidator
            if(!errors.isEmpty()){
                console.log(errors)
                const firstError = errors.errors.map(error => error.msg)[0];
                res.status(400).json({ error: firstError });
                return
            }
        // if everything went well, and all rules were passed, then move on to the next middleware
            next();
        }};
