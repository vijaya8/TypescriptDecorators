"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var studentData = new student_1.Student('vijaya123', 1, 'IT', true);
console.log(studentData);
console.log(studentData.exams());
console.log(studentData.getUsers());
console.log(studentData.myName());
