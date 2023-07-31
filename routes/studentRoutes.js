const {
    getStudents,
    postStudent,
    getStudent,
    updateStudent,
    deleteStudent,
} = require("../controllers/studentControllers")
const studentRouter = require("express").Router()

studentRouter.get("/student", getStudents) //to get all the students
studentRouter.post("/student", postStudent)
studentRouter.get("/student/:id", getStudent)
studentRouter.put("/student/:id", updateStudent)
studentRouter.delete("/student/:id", deleteStudent)

module.exports = studentRouter

// http://localhost:5000/app/student ----for post url type in postman
// http:/localhost:5000/app/student/ give id number,,,,,particular get the student through id