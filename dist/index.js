"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
let studentData = new student_1.Student(1, 'vijju', 'IT', true);
console.log(studentData);
console.log(studentData.exams());
console.log(studentData.getUsers());
console.log(studentData.myName('VijayaKumari'));
console.log('my branch is ', studentData.myBranch());
//# sourceMappingURL=index.js.map