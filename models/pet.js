const mongoose = require('mongoose')

// Schema
const petSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        min: 0,
        required:true
    },
    breed:String
})


// model

const Pet = mongoose.model('Pet',petSchema)

module.exports = Pet