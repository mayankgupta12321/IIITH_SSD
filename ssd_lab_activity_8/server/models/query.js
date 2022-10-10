const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema  = new Schema({
    exam_name: {
        type: String,
        required: true
    },
    query_name: {
        type: String,
        required: true
    },
    question_num: {
        type: Integer,
        required: true
    },
    ta_roll: {
        type: String,
        required: true
    },
    std_roll: {
        type: String,
        required: true
    },
    std_comment: {
        type: String,
        required: true
    },
    IsActive: {
        type: Boolean,
        required: true
    }
});


module.exports = mongoose.model('Url', querySchema);