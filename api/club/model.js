const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    clubID: {
        type: String
    },
    name: {
        type: String
    },
    logo: {
        type: String
    },
    description: {
        type: String
    },
    people: [{
        userid: {
            type: String
        },
        username: {
            type: String
        },
        userprofile: {
            type: String
        },
        position: {
            type: String,
            enum: ['Secretary', 'Jt. Sec.', 'Member']
        }
    }],
    events: {
        type: [String]
    },
    posts: {
        type: [String]
    },
    notifications: {
        type: [String]
    },
    meetings: {
        type: [String]
    }

});

module.exports = mongoose.model('Club', ClubSchema)