const mongoose = require('mongoose');

const PostSchema =  new mongoose.Schema({
    userid: {
        type: String
    },
    time:{
        type: Date
    },
    text: {
        type: String
    },
    image: {
        type: [String]
    },
    video: {
        type: [String]
    },
    likes: [{
        name: {
            type: String
        },
        uid: {
            type: String
        },
        profile_image: {
            type: String
        }
    }],
    comment: [{
        name: {
            type: String
        },
        uid: {
            type: String
        },
        profile_image: {
            type: String
        },
        comment: {
            type: String
        }
    }]
});