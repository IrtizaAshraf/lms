const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  

const courseSchma = new Schema ({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        default: 6,
    }
})

 module.exports = mongoose.model('Course', courseSchma);