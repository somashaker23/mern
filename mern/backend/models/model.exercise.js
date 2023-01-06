const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchma = new Schema({
    username:{type: String,required: true},
    description:{type: String,required: true},
    duration:{type:Number,required:true},
    date:{type:Date,required:true}
},{
    timestamp:true
});

const Exercise = mongoose.model('Exercise',exerciseSchma)

module.exports = Exercise;