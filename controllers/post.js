const Post = require('../modules/mpost');

//Callback function
exports.getPosts = (req, res)=> {
    //Get all posts from database
    const posts = Post.find()      //use find method to find posts and 
    .select("_id title body")     //select method to select which in the post you want to get.
    .then((posts)=>{
        res.json({posts: posts})   // posts key for posts value
    })
    .catch(err => console.log(err))
};

exports.createPost = (req, res)=>{
    const post = new Post(req.body);
//   console.log("Creating Post:", req.body);
    post.save().then(result => {                       //handling new post using save method which 
        res.json({ post: result})
    })
};


