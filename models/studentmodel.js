const  mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema ({
    name:{
        type: String,
        requried: true
    },
    email:{
        type: String,
        required: [true, 'Please also sun=bmit  email'],
        unique: true
    },
    age: {
        type: Number,
        required: true

    }

})

 module.exports = mongoose.model('Student', studentSchema)