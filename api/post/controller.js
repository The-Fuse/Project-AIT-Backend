const Post = require('./model');

// @desc Get all post data
// route GET /api/v1/post
// @access public

exports.getAllPost = async (req,res,next) => {
    const allPost = await Post.find();
    res.status(200).json({
        success: true,
        count: allPost.length,
        data: allPost
    });
};

// @desc Get a single post
// route GET /api/v1/post/:id
// @access public

exports.getPost = async (req,res,next) => {
    const post = await Post.findById(req.params.id);
    if(!post) {
        return res.status(400).json({success: false})
    };

    res.status(200).json({
        success: true,
        data: post
    });
};

// @desc Create a new Post
// route POST /api/v1/post
// @access private

exports.createPost = async (req,res,next) => {
    const post = await Post.create(req.body);
    res.status(200).json({
        success: true,
        data: post
    });
};

// @desc Update a post by id
// route PUT /api/v1/post/:id
// @access private

exports.updatePost = async (req,res,next) => {
    const post =  await Post.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true
    });
    if(!post) {
        return res.status(400).json({success: false});
    };
    res.status(200).json({
        succes: true,
        data: post
    });
};

// @desc Delete a post by id
// route DELETE /api/v1/post/:id
// @access private

exports.deletePost = async (req,res,next) => {

    const post = await Post.findByIdAndDelete(req.params.id);

    if(!post) {
        return res.status(400).json({success: false});
    };

    res.status(200).json({
        success: true,
        data : post
    });
}