const { default: mongoose, model} = require('mongoose');
const Student = require('../models/studentmodel');


const  addStudent = async (req, res) => {
    const {name, email, age } = req.body;
    try{
        const student = await Student.create({ name, email, age});
        res.status(201).send({ massage: "student added."}) 
    }catch (error){
        res.status(500).send({ massage: "Email should bd unique", error: error})
    } 
}

const getStudent = async (req, res)=>{
    try{
        const students = await Student.find({});
        res.status(200).send({ students: students})

    }catch{error}{
        res.status(404).send({ massage: " error Occured"})
    }
}

const getSingleStudents = async (req, res)=>{
     const { id } = req.params;
     if(!student){
        res.status(404).send({ massage: "user not found"})
        return
    }
    res.status(200).send({ student: student})
}


const deleteStudent = async (req, res)=>{
    const { id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send({ massage: "no Such Student"})
        return
    }
    const student = await Student.findOneAndDelete({ _id: id });
    if (!student) {
        res.status(404).send({ message: 'user not found' })
        return
    }
    res.status(202).send({ message: 'user deleted' });
}
const updateStudent = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send({ message: 'no such student' })
        return
    }
    const student = await Student.findOneAndUpdate(
        { _id: id },
        { ...req.body }
    )
    if (!student) {
        res.send({ error: 'no student found' })
        return
    }
    res.send({ message: 'student updated', student: student })

}

 module.exports = { addStudent, getStudent, getSingleStudents, deleteStudent, updateStudent}