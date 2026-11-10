// question 1
// 1. Random Number
// Use Math.random() to generate and display a random number.

console.log(Math.random());

// // Question 2
// 2. Random Whole Number

// Use Math.random() and Math.floor() to generate a random whole number between 1 and 10.
// • Example:
// // • Output: Any whole number from 1 to 10
max = 10;
min = 1;
console.log(Math.floor(Math.random()*( max-min  )));

// question 3
// 3. Round a Number

// Use Math.round() to round the number 4.6 to the nearest integer.
// • Example:
// • Input: 4.6
// • Output: 5
console.log(Math.round(4.6));

// Question 4
// 4. Floor and Ceil

// Use Math.floor() and Math.ceil() on the number 7.3 and display both results.
// • Example:
// Math.floor(7.3) \(\rightarrow \) 7

let digit = 7.3;
console.log(Math.floor(7.3));
 console.log(Math.ceil(7.3));
 

//  Question 5 //
// 5. Absolute Value
// Use Math.abs() to find the positive value of -25.
// Example:
// Input: -25
// Output: 25

console.log(Math.abs(-25));

// Question 6   
// 6. Power and Square Root
// Use Math.pow() to calculate 2 raised to the power 3 and Math.sqrt() to find the square root of 64.
// Example:
// Math.pow(2, 3) → 8
// Math.sqrt(64) → 8

console.log(Math.pow(2, 3) , Math.sqrt(64));

// Question 7
// 7. Minimum and Maximum
// Use Math.min() and Math.max() to find the smallest and largest values from 10, 25, 5, and 18.
// Example:
// Minimum: 5
// Maximum: 25


min= 25;
max= 60;
console.log( Math.min (56,38), Math.max(67, 89));

// question 8*  
// . Extract Part of a String 
// Create a string "JavaScript Programming" and use slice() to extract the word "JavaScript". 


let strr = `javaScript programming`;
console.log(strr.slice(0  ,10));


// Question 9 
// Create a string "HTML,CSS,JavaScript" and use split() to separate the values. 
// Example: 
// Input: "HTML,CSS,JavaScript"

let mrp = `HTML , CSS , javaScript`;
console.log(mrp.split( ` , `));


// question 10

// Create a string "Hello World" and use replace() to replace "World" with "JavaScript". 
// Example: 
// Output: "Hello JavaScript" 

let str =`hello world`
let result = str.replace(`world`, `javaScript`)
console.log(result);

//  Question 11

//  11. Check Email 
// Create a variable email containing an email address and use includes() to check whether it contains the 
// @ symbol. 
// Example:  
// Input: "user@example.com" 

let email = `user@example.com`;
console.log(email.includes(`@`) && email.includes(`com`));

// Question 12
// Create a variable fileName containing "assignment.pdf" and use endsWith() to check whether the file 
// has a .pdf extension.

let fileName = `assignment.pdf`;
console.log(fileName.endsWith(`pdf`));

// question 13
// Create a string with extra spaces, such as "   Hello JavaScript   ", and use trim() to remove the spaces 
// from the beginning and end. 
// Example: 
// Output: "Hello JavaScript" 



let space = `   Hello javaScript   `;
console.log(space.trim(``));


// Question 14 
// Create a variable greet containing "Hello User" and use replace() to change "User" to a name of your 
// choice. 

let greet = `Hello user`
console.log(greet.replace(`, hemant`));

//  Question 15
// reate a variable containing the number 12.56789 and use toFixed(2) to display the number with two 
// decimal places. Example: Output: 12.57

let fixed = 12.56789;
console.log(fixed.toFixed(2));

// question 16

// 16. Format a Price 
// Create a variable price containing a decimal value and use toFixed(2) to display it as a price with two 
// decimal places. 
// Example Input: 99.5 
// Output: 99.50 

let decimal = 99.50483;
console.log(decimal.toFixed(3));

// Question 17
// Create a Date object using new Date() and display the current date and time. 


console.log(Date.now);

// Question 18  ***
// Create a Date object for a specific date of your choice and display it. 
// Example: new Date("2026-01-01") 

console.log(new Date().toLocaleTimeString());


// Question 19  
// Use Date.now() to get and display the current timestamp. 

console.log(Date.now());


// Questionn 20 
// Create two Date objects for two different dates and find the difference between them in milliseconds. 
// Example:  
// Date 1: January 1, 2026 
// Date 2: January 2, 2026
// Question 20
let date1 = new Date("2026-01-01");
let date2 = new Date("2026-01-02");

console.log(date2.getTime() - date1.getTime());

// Section 1  loop  use  kaise karte

// Question 1 
// Write a program to print numbers from 1 to 10 using a for loop. 

for(let i = 0; i<=10; i++){
console.log(i);

}

// question 2
// Write a program to print all even numbers from 1 to 20. 

for(let i = 0; i<=10; i+=2){
console.log(i);

}

// Question 3
// Write a program to print all odd numbers from 1 to 20. 
for(let i = 1; i<=20; i+=2){
console.log(i);

}

// Question 4 
// Write a program to print numbers from 10 to 1 using a loop.

for(let i = 10; i>=1; i--){
console.log(i);

}

// Question 5
// Write a program to calculate the sum of numbers from 1 to 10.
// let sum =0;
for(let i = 1; i<=10; i++){
    sum +=i
console.log(sum);

}

// Question 6 
// Take a number and print its multiplication table up to 10. 

let multiply = 5
for(let i =1; i<=10 ; i++){
  
  console.log(multiply*i)

}

// Question 7
// Write a program to print numbers from 1 to 10 using a while loop. 
let i = 1;
while(i<=10){
console.log(i);

    i++
}


// Question  8**
// Write a program to calculate the sum of all even numbers from 1 to 20.
// let add=0;
let ic=0;
while(ic<=20){
add+=ic;
    console.log(add+ic);
    
i+=2
}

// Question  9 
// Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the 
// number reaches 6 using the break statement.  
// Expected Output: 1 2 3 4 5 

let j=0;
while(j<=10){
    if( j ==5){
        break;
    }
    console.log(j);
    
j++

}

// Question 10
// Print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i=0; i<=10; i++){
if(i===5){
continue
}
console.log(i);

}

// Question 11
// Create a function named greetUser(name) that takes a name as a parameter and displays a greeting 
// message.  
// Example:  
// Input: Rahul  
// Output: Hello, Rahul 


function greet(name, greet){
console.log(`${greet}, ${name}`);

}greet(`hemant`, `Namaste`)
greet(`pawam`,` matherchood`)

// Question 12
// Create a function that takes two numbers as parameters and returns their sum. 

let num1=10;
let num2= 20;

function perameter(num1, num2){

    return  num1+ num2;


}console.log(perameter(num1, num2));

// Question 13
// Create a function that takes a number and checks whether it is even or odd.
// let num = 10;

function digit(num) {
    if (num % 2 === 0) {
        console.log("yes this is even");
    } else {
        console.log("this is odd");
    }
}
digit(num);

// Question 14
// create a function that takes a number and returns its square. 
let num3 = 10;
function perameter(num3){
squre = num3*num3;
return squre;
}console.log(perameter(num3));


// Question 16
// Create a function named calculateTotal(price, quantity) using a function declaration. The function 
// should calculate and display the total price.  
// Example:  
// Input: price = 100, quantity = 3  
// Output: Total Price: 300 
let price =100;
quantity =3;
function calculateTotal(price, quantity){
Total = quantity*price;
return Total;

}console.log(calculateTotal( price , quantity));

// Question 17
// Create a function printNumbers(n) that prints numbers from 1 to n using a loop. 
// Example: 
// Input: 5 
// Output: 1 2 3 4 5 

function printNumbers(n) {
  let result = "n";
  for (let i = 1; i <= n; i++) {
    result += i + " ";
  }
  console.log(result.trim());
}
printNumbers(5);

// Question 18
// Create a function printTable(num) that prints the multiplication table of the given number. 
1

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}printTable(5);

// Question 19
// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n. 
// Example: 
// Input: 5 
// Output: 15 

function sumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumNumbers(5));

