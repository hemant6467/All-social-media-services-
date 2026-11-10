// Section 1 - Math Object 
// 1. Random Number
// Use Math.random() to generate and display a random number. 


// console.log(Math.random());

// 2. Random Whole Number
// Use Math.random() and Math.floor() to generate a random whole number between 1 and 10. 
// Example: 
// Output: Any whole number from 1 to 10


// let min=1;
// max=10;
// console.log(Math.floor(Math.random()*(max-min+1))+min);


// 3. Round a Number
// Use Math.round() to round the number 4.6 to the nearest integer. 
// Example: 
// Input: 4.6 
// Output: 5

// console.log(Math.round(4.6))

// 4. Floor and Ceil
// Use Math.floor() and Math.ceil() on the number 7.3 and display both results. 
// Example: 
// Math.floor(7.3) → 7 
// Math.ceil(7.3) → 8


// console.log(  `math floor =`,Math.floor(7.3));
// console.log(`math ceil =`, Math.ceil(7.3))

// 5. Absolute Value 
// Use Math.abs() to find the positive value of -25. 
// Example: 
// Input: -25 
// Output: 25


// console.log(Math.abs(-25));
// console.log(Math.abs(25));


// 6. Power and Square Root 
// Use Math.pow() to calculate 2 raised to the power 3 and Math.sqrt() to find the square root of 64. 
// Example: 
// Math.pow(2, 3) → 8


// console.log(Math.pow(2,3));
// console.log(Math.sqrt(64));


// 7. Minimum and Maximum 
// Use Math.min() and Math.max() to find the smallest and largest values from 10, 25, 5, and 18. 
// Example: 
// Minimum: 5 
// Maximum: 25

// console.log(Math.min(10,25,18,5));
// console.log(Math.max(10,18,25,5));


// 8. Extract Part of a String 
// Create a string "JavaScript Programming" and use slice() to extract the word "JavaScript". 

// let nk="javascript programming"
// console.log(nk.slice(0,10))



// 9. Split a String 
// Create a string "HTML,CSS,JavaScript" and use split() to separate the values. 
// Example: 
// Input: "HTML,CSS,JavaScript"
// Output: ["HTML", "CSS", "JavaScript"]


// course= "HTML,CSS,JavaScript";
// console.log(course.split(","))


// 10. Replace Text 
// Create a string "Hello World" and use replace() to replace "World" with "JavaScript". 
// Example: 
// Output: "Hello JavaScript" 

// let hello ="hello world"
// console.log(hello.replace("world","javascript"))

// 11. Check Email 
// Create a variable email containing an email address and use includes() to check whether it contains the 
// @ symbol. 
// Example:  
// Input: "user@example.com" 


// let email="abc@gmail.com";
// console.log(email.includes("@"))
// console.log(email.endsWith("gmail.com"))


// 12. Check File Extension 
// Create a variable fileName containing "assignment.pdf" and use endsWith() to check whether the file 
// has a .pdf extension.

// let file="assignment.pdf";
// console.log(file.endsWith(".pdf"))



// 13. Remove Extra Spaces 
// Create a string with extra spaces, such as "   Hello JavaScript   ", and use trim() to remove the spaces 
// from the beginning and end. 
// Example: 
// Output: "Hello JavaScript"



// let name = "   Hello JavaScript   ";
// console.log(name.slice(3, 19));


// 14. Replace a Greeting 
// Create a variable greet containing "Hello User" and use replace() to change "User" to a name of your 
// choice.


// let greet = "Hello User";
// console.log(greet.replace("Hello", "username"))

// Section 3 - Number Built-in Methods 
// 15. Format a Decimal Number 
// Create a variable containing the number 12.56789 and use toFixed(2) to display the number with two 
// decimal places.
// Example: 
// Output: 12.57

// let number = 12.56789;
// console.log(number.toFixed(2))

// 16. Format a Price 
// Create a variable price containing a decimal value and use toFixed(2) to display it as a price with two 
// decimal places. 
// Example Input: 99.5 
// Output: 99.50

// let input=12.3;
// console.log(input.toFixed(2))

// Section 4 - Date Object 
// 17. Current Date and Time 
// Create a Date object using new Date() and display the current date and time. 

// let date=new Date();
// console.log(Date())
// console.log(date.ToLocalDateString());
// console.log(date.getDay());
// console,log(date.getfullyear());
// console.log(date.getMonth());


// 18. Store a Specific Date 
// Create a Date object for a specific date of your choice and display it.
// Example: new Date("2026-01-01")


// let date =new date();
// console.log(Date())



// 19. Current Timestamp 
// Use Date.now() to get and display the current timestamp.

// date=new Date()
// console.log(Date.now())
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocalDate())



// 20. Simple Date Difference 
// Create two Date objects for two different dates and find the difference between them in milliseconds. 
// Example:  
// Date 1: January 1, 2026 
// Date 2: January 2, 2026 


let date1 = new Date("01.01.2026")
let date2 = new Date("01.02.2026")
console.log(date1)
console.log(date2)
let diffrence = date2 - date1;

console.log(`date diffrence in milisecond ${diffrence}`)


