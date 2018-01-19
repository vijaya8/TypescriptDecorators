"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function modifyName(target, propertyKey, propDesc) {
    console.log('target is', target);
    console.log('property key', propertyKey);
    console.log('propDesc is ', propDesc);
    let oldValue = propDesc.value;
    propDesc.value = function () {
        return 'My FullName ' + arguments[0];
    };
    return propDesc;
}
function studentDec(target, propKey) {
    let val = target[propKey];
    let getter = function () {
        return 'CSE';
    };
    let setter = function (newVal) {
        val = newVal;
    };
    Object.defineProperty(target, propKey, {
        set: setter,
        get: getter
    });
    console.log(Object.getOwnPropertyDescriptor(target, propKey));
}
class Student {
    constructor(id, name, branch, isRegular) {
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.isRegular = isRegular;
    }
    exams() {
        return 50;
    }
    getUsers() {
        console.log('in get fun', this.name);
    }
    myName(myName) {
        return this.name;
    }
    myBranch() {
        return this.branch;
    }
}
__decorate([
    studentDec
], Student.prototype, "branch", void 0);
__decorate([
    modifyName
], Student.prototype, "myName", null);
exports.Student = Student;
//# sourceMappingURL=student.js.map