const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    numOfLikes: {
        type: Number,
        default: 0,
    },
    numOfDislikes: {
        type: Number,
        default: 0,
    },
    location: {
        type: [Number],
        required: true,
        default: [37.3382, 121.8863]
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('post', PostSchema);
