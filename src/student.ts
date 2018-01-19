function modifyName(target:object,propertyKey: string, propDesc: PropertyDescriptor) :any{
    console.log('target is',target);
    console.log('property key',propertyKey);
    console.log('propDesc is ',propDesc);

    let oldValue = propDesc.value;

    propDesc.value = function() {
        return 'My FullName ' + arguments[0];
    };
    return propDesc
}

function studentDec(target:object,propKey: string) {
    let val = target[propKey];
    let getter = function() {
        return 'CSE'
    }
    let setter = function(newVal) {
       val = newVal;
    }

   Object.defineProperty(target,propKey,{
       set:setter,
       get:getter
   });

   console.log(Object.getOwnPropertyDescriptor(target, propKey));
}

export class Student {
    id: number;
    name: string;
    @studentDec
    branch: string;
    isRegular: boolean;
    constructor(id: number,
        name: string,
        branch: string,
        isRegular: boolean) {
                this.id = id;
                this.name = name;
                this.branch = branch;
                this.isRegular = isRegular;

    }

    exams (): number {
        return 50;
    }

    getUsers (): any {
        console.log('in get fun',this.name);
    }

    @modifyName
    myName(myName): any {
            return this.name;
    }
    myBranch() {
        return this.branch;
    }
    
}