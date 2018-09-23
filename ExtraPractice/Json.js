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