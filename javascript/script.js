/*function myFunction(value) {
    let i = 0;
    var id = document.getElementById("demo").innerHTML= (value * Math.PI(0));
    var listItem = ["", ""];
    listItem.push(id.value);
 }

var student = [
  { Name : "Ram", Age : 15},
  { Name : "Anjali", Age : 34},
  { Name : "Stephen", Age : 12},
];

console.log(student.Name)*/


/*
var input = prompt("")

const id = input;
var i = 5;

if(id > Number.isInteger()){
  alert("its not empty its full")
}else{
  console.log("its empptty ;)");
}
*/

//for loop
/*
let fruits = ["apple", "grape", "pineapple", "banana", "peach"];

for(let i = 0; fruits.length > i; i++){
  console.log(fruits[i]);
}*/


let fruits = ["apple", "mango", "banana", "pineapple", "lemon", "tomato", "potato", "chili", "Kiwi", ]

fruits.push("carrot");

for(let i = 0; fruits.length > i; i++){
  console.log(i + ': ' + fruits[i]);
}