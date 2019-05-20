const Post = require('../models/posts');

//get all post from the database
exports.getPosts = (req, res) => {
    const posts = Post.find()
        //select specific field want to view by the users
        .select('_id title body')
        .then(posts => {
            //default status is 200, so you dont need to put status
            // res.status(200).json({ posts: posts });
            res.json({ posts });
        })
        .catch(err => console.log(err));
};

//create post to send to database
exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save()
        .then(post => {
            res.json({ post }); //default status is 200, so you dont need to put status
        });
};