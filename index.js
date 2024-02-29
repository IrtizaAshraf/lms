// const express = require('express');
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { getStudent, getSingleStudents, addStudent, deleteStudent, updateStudent } = require('./controllers/studentcontroller')
const { getCourse,addCourse, editCourse, deleteCourse,getSingleCourse} =require('./controllers/coursecontroller')
require('dotenv').config()


// const port = 3000
const port = process.env.PORT

// middeele were
app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('Hello world')
});


// Students Api for mongodb 
app.get('/api/v1/students', getStudent);
app.get('/api/v1/students/:id', getSingleStudents);
app.post('/api/v1/students', addStudent);
app.delete('/api/v1/students/:id', deleteStudent);
app.put('/api/v1/students/:id', updateStudent);


// Course Apis for mongodb
app.get('/api/v1/course', getCourse);
app.get('/api/v1/course', getSingleCourse);
app.post('/api/v1/course', addCourse);
app.delete('/api/v1/course', deleteCourse);
app.put('/api/v1/course', editCourse)


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED");
    } catch (error) {
        console.log(error);
    }
};

connectDB().then(() => {
    app.listen(process.env.PORT);
}).catch((err)=>{
    console.log(err);
})



















// const todos = [];

// app.get('/todos', (req, res) => {
//     res.send(todos)
// })
// app.post("/todos", (req, res) => {
//     const text = req.body.text;
//     const newTodo = {
//         id: todos.length + 1,
//         text,
//     };
//     todos.push(newTodo);
// });

// app.put("/todos/:id", (req, res) => {
//     const id = req.params.id;
//     const text = req.body.text;
//     const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

//     if (todoIndex !== -1) {
//         todos[todoIndex].text = text;
//         res.json(todos[todoIndex]);
//     } else {
//     }
// });


// app.delete("/todos/:id", (req, res) => {
    //     const id = req.params.id;
    //     todos = todos.filter((todo) => todo.id !== parseInt(id));
    //     res.status(204).end();
    // });
    
    
    
    // app.get('/login', (req, res) => {
        //   res.send('login user')
        // })
        
        // app.listen(port, () => {
            //   console.log(`Example app listening on port ${port}`)
            // })
            
            // const connectDB = async ()=>{
                //  try {
                    //     const conn = await
                    //  }
                    // }