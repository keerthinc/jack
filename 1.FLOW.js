
//primitive datatypes
let name = "luer"; //string
let age = 36.99; //number
let isApproved = false; //boolean
let firstName;  //undefined
let selectedColor; //null
console.log(typeof selectedColor);

//Reference datatypes
//object 
//arrays
var space = ["moon", "star", "sun"];
var space1 = new Array("moon", "star", "sun");
console.log(space[0]);
//functions:will disscus later
prompt("enter some value");// go to JS.js file

//operators
//Arithmetic Operators
var sum = 3+2;//addition
console.log(sum);
var diff = 3-2;//subtraction
console.log("diff:" +diff);
var product = 3*2;//multiplication
console.log("product: " +product);
var div = 5/2;//division
console.log("div: "+div);
var mod = 5%4;//modulus
console.log("mod:" +mod);
var incre = diff++;//increment
console.log("increment: " +incre);
var decre = sum--;//decrement
console.log("decrement: "+ decre);

//string operator, sring concatenation
var firstName = "north";
var secondName ="banglore";
var fullName = firstName+secondName;
console.log(fullName);

var num1 = '2';
var num2 ="3";
var num3 = num1+"4";
console.log(num3);

var s1 = "work;
var s2 = "shop";
var s3 = s1 +s2;

//Assignment operators
= //assignment
+= //add, assign
-= //sub, assign
*= //multiply, assign
%= //mod, assign

var s = 9;
s+=8 //s= s+8
s-=8 //s = s-8
s*=8 //s= s*8
s%=8 // s= s%8

//Comparission operator :this will learn by using conditional statments like if else, if elseif else;
//we always get output value as boolean 1 or 0
var s1 = 9;
var s2 = 8;
if(s1 == s2)
{
    console.log("S1, s2 are equal");
}
else{
    console.log("s1, s2 are not equal");
}
//thriple equal to (===)means: it will even check datatype of variable;
var s1 = 9;
var s2 = "9";
if(s1 ===s2)
{
    console.log("S1, s2 are equal");
}
else{
    console.log("s1, s2 are not equal");
}

//Boolean operators, &&, ||, !
var p =4;
var q= 5;
if(p<=q || p>0)
{
    console.log("p is +ve & lesser then q");
}
else
{
    console.log("p is greater then q");
}

//ternary operator
//condition ? (if true) : (if false)
var ageofPerson = 18
console(ageofPerson >= 18 ? "issue Voter-Id" : "dont issue Voter-Id");

//if, elseif, else
age = prompt("enter the marks outof 100");
if(marks>=70)
{
    console.log("Good");
}
elseif(marks<70 && marks>=40)
{
    console.log("average");
}
elseif(makes<40)
{
    console.log("not good");
}

//Switch statments
var rank = prompt("enter your rank");
switch(weight)
{
    case 1:document.write("Your rank is 1");
    break;
    case 2:document.write("Your rank is 2");
    break;
    case 3:document.write("Your rank is 3");
    break;
    default:
    document.write("Your rank is more then 3");
    break;
}


//loops
//forloops, for(initialization, condition, updation)
var subjects = ["maths", "Physics"];
var marks = new Array();
var num1;
for(var j = 0; j<subjects.length; j++) 
{
    num1 = parseFloat(prompt("enter the marks for subject" + subjects[j]))
    marks[j] = num1;
    
}


//for in loop, for(variable in value)
for(m in marks)
{
    document.write(marks)
}

//while loop
var i =8;
while(i<10)
{
   console.log(i);
   i++;
}

do{
  console.log(i);
}while(i<10)


function :: building blocks of JavaScripts, 
which can be  reused many times with different arguments to produce differnt SpeechRecognitionResultList.
/*function nameOfTheFuntion(paraments/arguments)     
{
  body of the function
}

nameOfTheFunction();
*/

function paraments: values which accepted by function
Return statement: every function must have return statement, if not defult value will Written
 
//types of functions
//1) Named function
function addNum(a, b)
{
    console.log("Named function addNUm is called");
    return a+b;
}
var sum =addNum(3,4);
console.log(sum);

//2)Anonymous functions
var anon = function(a,b) {
    console.log("anonymous function is called");
    return a+b;
}
//if want to call anonymous function by adding it to variable like
anon(5,6);

setTimeout(function(){console.log("anonymous function call in setTimeout")}, 3000);

//consturctors
var addFunc = new Function("a", "b", "console.log('in constructors function');return a+b");
var c = addFunc(2,3);
console.log(c);


//self-invoking functions

(function()
{
alert("this is self invoking function");
}());

(function(a,b)
{
console.log("in self invoking function");
return a+b;
}(2, 3));


//objects is kind of real life entities
properties: (what object contains)human is an object , he has eyes, nose ()

methods/functionalities: (what object can do)
 
we can access all properties of object by its methid by using dot operator

//creating object
var person = new Object();
person.name = "siri";
person.age ="28";
person.Phno = 9998788667;
}
//now by using function , i can put object inside a function
function createPerson()
{ 
    var person = new Object();
    person.name = "siri";
    person.age ="28";
    person.designation="trainer";
    person.Phno = 9998788667;
    return person;
}
var siri = createPerson();



var trainer= {
    name :"ABC",
    subjects:["maths", "physics", "chem"],
    teachers:["F", "S"],
    age:60
}
var properties= "";
for(p in trainer)
{
    properties += p +" : "
}
console.log(properties);

//deleting a properties 
console.log("Before deletion" +properties);
delete trainer.age;
var properties= "";
for(p in trainer)
{
    properties += p +" : "
}
console.log("After deletion" +properties);


//DOM
document.getElementById("abc");
document.getElementById("abc").innerHTML="hi there";/// changing innerhtml
document.getElementsByTagName("button");
document.getElementById("abc").setAttribute("style", "color:blue");///changing style(color)


//event listner, adding event listeners dynamically
function paraClicked()
{
    document.getElementById("abc").setAttribute("style", "color:yellow");
}
document.getElementById("abc").addEventListener("click", paraClicked);


//adding event listners statically, go to html page
<button id ="b" onclick= "buttonClick">submit</button>
//in js file
function buttonClick()
{
    document.getElementsById("b").setAttribute("style", "color:blue");
}