// JSON is just a string representation of javascript objects. Every property is in doule quotes. 
// Very useful because string is considered as a simple text, which we store in files etc.


var obj = {
    name : 'Jashan'
}
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);



var personString = '{ "name" : "Jashan" , "age" : 25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);