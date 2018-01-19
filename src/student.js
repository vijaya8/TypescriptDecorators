"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function modifyName(target, propertyKey, propDesc) {
    console.log('target is', target);
    console.log('property key', propertyKey);
    console.log('propDesc is ', propDesc);
    var oldValue = propDesc.value;
    propDesc.value = function () {
        return 'vijaya' + arguments[0];
    };
    return propDesc;
}
function studentDec(target, propyKey) {
    var val = target[propyKey];
    var getter = function () {
        return 'CSE';
    };
    var setter = function (newVal) {
        val = newVal;
    };
    Object.defineProperty(target, propyKey, {
        set: setter,
        get: getter
    });
}
var Student = /** @class */ (function () {
    function Student(name, id, branch, isRegular) {
        this.name = name;
        this.id = id;
        this.branch = branch;
        this.isRegular = isRegular;
    }
    Student.prototype.exams = function () {
        return 50;
    };
    Student.prototype.getUsers = function () {
        console.log(this.name);
    };
    Student.prototype.myName = function () {
        return this.name;
    };
    Student.prototype.students = function () {
        return this.branch;
    };
    __decorate([
        modifyName
    ], Student.prototype, "myName");
    return Student;
}());
exports.Student = Student;
