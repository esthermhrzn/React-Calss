/*let i=0;
for ( i=0 ;  i<100 ;  i++){
    console.log(i);
}

while(i<100){
    console.log(i);
    i++;
}*/
// let fruits = ["mango","apple","oragne"];
// fruits.push("banana");
// console.log(fruits);
// console.log(fruits[0]);

// const { response } = require("express");

// let stack = [];
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log(stack);
// console.log(stack.pop());

// let queue = [];
// queue.push("apple");
// queue.push("orange");
// queue.push("mango");
// console.log(queue);
// console.log(queue.shift());

// Coercion
// let a = String(20);
// console.log(a, typeof a);

//function
// function add(a,b,c){
//     return a+b+c;
// }
// const addition = add(60,70,80);
// console.log(addition);

//arrow function
// const mul =(a,b)=>{
//     return a*b;
// };
// console.log(mul(20,30));
// console.log(mul(22,5));
// console.log(mul(2,90));

// const student = {
//     name: "sita sharma",
//     age:20,
//     address: "lalitpur",
//     email: "sita@gmail.com",
// };
// console.log(student.email);

//naming convention
// camelCase: addNumber, getUserName, calculateTotal
// snake_case: add_number, get_user_name
// PascalCase: AddNumber, GetUserName

//hosting
// console.log(a);
// var a =78;
// const a =78;

//scope {}

// Global scope
// let company = "Nagarjuna";
// function display(){
//     console.log(company);
// }
// display();
// console.log(company);

//Block Scope
// {
//     let city = "Kathmandu";
//     console.log(city);
// }

//local scope
// function display(){
//     let age = 23;
//     console.log(age);
// }
// display();

//parameter and argument
// const add = (a,b,c) => {
//     return a+b+c;
// };
// const result = add(5,9,5);
// console.log(result);

//Closure
// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const counter = outer();
// counter();
// counter();

// Asynchronous task 
// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// }, 10000);
// console.log(3);

//Global Execution context: Memory Ceation Phase, Execution Phase
// const add = (a,b,c) => {
//     return a*b*c;
// };
// const result = add(5,9,5);
// console.log(result);

// Memory Creation Phase
// a - undefined
// b - undefined
// c - undefined
// add - function 

// Execution Phase
// a - 5
// b - 9
// c - 5
// add - add()

// Event Loop

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json())
// .then((data) => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data));

// function declation and execution
// const add = (a,b)=>{
//     return a+b;
// }
// console.log(add(6,8));


//eS6 ARROW function: ()=>

//IIFE: Immediately Invoke Function Expression
// (function(){
//     console.log("Hello world");
// })();

//anyomonous function = a function wothout name
// const greet = function(){
//     console.log ("Hi world");
// };
// greet();

// const mul = function(a,b){
//     console.log (a+b);
// };
// mul(8,9);

//call back function : a function passed an argument
// const parent = (func) =>{
//     console.log("Parent");
//     func("variable return");
// }

// const child =(a)=>{
//     console.log("child",a)
// }
// parent(child);

const operation = (add, b, c) => {
    console.log("operation");
    add("the sum of number is " ,b+c )
}
const addition = (a,b)=>{
    console.log(a,b);
}
operation(addition, 10, 20);

//hof: higher order function
// 1. takes function as input
// 2. returns function as output
// 3. both at same time

const parent = () => {
    console.log("Parent");
    const child = () => {
        console.log("child");
    };
    return child;
};
const result = parent();
result();