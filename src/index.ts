import { Student } from './student';

let studentData = new Student(1,'vijju','IT', true);

console.log(studentData);
console.log(studentData.exams());
console.log(studentData.getUsers());

console.log(studentData.myName('VijayaKumari'));

console.log('my branch is ', studentData.myBranch());