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
let text = "";
let i = 0;


while (i < 100) {
  text += "<br>the number is " + i;
  i++;
}

document.getElementById("demo").innerHTML = text;
