# TypescriptDecorators

Steps for create typescript project
----------------------------------------
To install typescript:

npm install typescript -g

to create package.json

npm init

to create tsconig.json file
 tsc  —init

Below methos need to know for decorators:
--------------------------------------------
 Object.defineProperty :

 for adding the properties to object
 (objcetName , propreties , descriptor)

example :
Object.defineProperty(company, 'CTO', {
    writable: true,
    value: 'JP',
    enumerable:true
});


Object.getOwnPropertyDescriptor:

provide the description of a property.

example :
let anotherObj1 = Object.getOwnPropertyDescriptor(company,'CTO');
console.log(anotherObj1);


Descriptor: is an object
1.add descriptor : have following properties
	a.configurable
	b.enumerable
	c.value — optional
	d.writable — optional

2.accessor descriptor : two properties
	a.get
	b.set


Decorators :
------------ 
start with @
is an expression followed by name and evaluating the value

Types of decorators :

1.Method decorators: decorate a methods of a class
sign:
function(target:Objet , propertyKey: string , propDesc: PropDesc)

2.property decorators

function(target:Objet , propertyKey: string )

3.Class decorators

function(target:Objet )

4.Parameter decorators

function(target:Objet , propertyKey: string , index: number)