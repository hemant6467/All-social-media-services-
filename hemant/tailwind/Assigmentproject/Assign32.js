// Question 1
// Create an array containing the names of five fruits and display the complete array. 

arry = [`mango `, `apple `, `pineapple`, `grapes`, `Guava`]

console.log(arry);

// Question 2
// Create the following array and use push() to add "JavaScript" at the end. 
// Example: 
// Input: ["HTML", "CSS"] 
// Output: ["HTML", "CSS", "JavaScript"] 

array1 = ["HTML", "CSS"]
array1.push(`Javavscript`)
console.log(array1);

// Question 3
// 3. Remove an Element Using pop() 
// Remove the last element from the given array using pop(). 
// Example: 
// Input: ["HTML", "CSS", "JavaScript"] 
// Output: ["HTML", "CSS"] 
array2 = ['HTML', 'CSS', 'Javascript']
array2.pop(`javascript`)
console.log(array2);

// question 4
// Remove the first element from the following array using shift(). 
// Example: 
// Input: ["Red", "Blue", "Green"] 
// Output: ["Blue", "Green"] 
array3 = ["Red", "Blue", "Green"]
array3.shift(`read`)
console.log(array3);

// question 5
// Use unshift() to add "HTML" at the beginning of the following array. 
// Example: 
// Input: ["CSS", "JavaScript"] 
// Output: ["HTML", "CSS", "JavaScript"]

array4 = ["CSS", "JavaScript"]
array4.unshift(`html`)
console.log(array4);

// question 6
// Create an array containing two programming languages and use push() to add two more languages to 
// the array. 
// Example: 
// Input: ["HTML", "CSS"]  
// After adding: "JavaScript" and "React"   
// Output: ["HTML", "CSS", "JavaScript", "React"]  

array5 = ["HTML", "CSS"]
array5.push(`javascript`)
array5.push(`react`)
console.log(array5);

// // Question 7
// Remove "CSS" from the following array using splice(). 
// Example: 
// Input: ["HTML", "CSS", "JavaScript", "React"] 
// Output: ["HTML", "JavaScript", "React"] 

array6 = ["HTML", "CSS", "JavaScript", "React"]
array6.splice(1, 1)

console.log(array6);

// question 8
// 8. Add an Element Using splice() 
// Use splice() to add "CSS" between "HTML" and "JavaScript". 
// Example: 
// Input: ["HTML", "JavaScript"] 
// Output: ["HTML", "CSS", "JavaScript"] 

array7 = ["HTML", "JavaScript"]
array7.splice(1, 0, `CSS`)

console.log(array7);

// Question 9
// Use splice() to replace "Java" with "JavaScript". 
// Example: 
// Input: ["HTML", "CSS", "Java"] 
// Output: ["HTML", "CSS", "JavaScript"] 

array8 = ["HTML", "CSS", "Java"]
array8.splice(2, 1, `javascript`)
console.log(array8);

// question 10
// se slice() to create a new array containing "CSS", "JavaScript", and "React". 
// Example: 
// Input: ["HTML", "CSS", "JavaScript", "React", "Node.js"] 
// Output: ["CSS", "JavaScript", "React"] 
array9 = ["HTML", "CSS", "JavaScript", "React", "Node.js"]
let trimaee = array9.slice(1, 4)

console.log(trimaee);


// Question 11
// Create an array of your choice and use slice() without any arguments to create a copy of that array. 

array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let trimae = array10.slice(1, 4)

console.log(trimae);

// question 12
// se indexOf() to find the index of "JavaScript". 
// Example: 
// Input: ["HTML", "CSS", "JavaScript", "React"] 
// Output: 2

array11 = ["HTML", "CSS", "JavaScript", "React"]
console.log(array11.indexOf(`JavaScript`));

// // Question 13
// Create an array of programming languages and use indexOf() to find the position of "React".



array12 = ["HTML", "CSS", "JavaScript", "React"]
console.log(array12.indexOf(`React`));

// question 14
// Create an array of user objects containing name and age. Use find() to get the user whose name is 
// "Rahul".
// Example: 
// Input: 
// [ 
// ] 
// { name: "Rahul", age: 20 }, 
// { name: "Priya", age: 22 }

let array13 = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }

]

const result = array13.find(array13 => array13.name === `Rahul`);
console.log(result);



// Question 15
// Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya". 
// Example: 
// [ 
// ] 
// { name: "Rahul", age: 20 }, 
// { name: "Priya", age: 22 }

arr = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]
let final = arr.findIndex(arr => arr.name === `Priya`)
console.log(final);

// Question 16
// 16. Flatten a Nested Array 
// Use flat() to convert the nested array into a single-level array. 
// Example: 
// Input: [1, 2, [3, 4]] 
// Output: [1, 2, 3, 4] 

let flater = [1, 2, [3, 4]];
const flat = flater.flat(2, 1);
console.log(flat);


// question 17
// Use flat() with an appropriate depth to flatten the following array completely. 
// Example: 
// Input: [1, [2, [3, 4]]] 
// Output: [1, 2, 3, 4] 

bcarray = [1, [2, [3, 4]]]
console.log(bcarray.flat(2));


// Question 18
// Create an array containing five colors and use forEach() to display every color. 

color = [
    { colu: `pink` },
    { colu: `yellow` },
    { colu: `green` },
    { colu: `black` },
    { colu: `White` }
]

const colour = color.forEach(color => {
    console.log(color);

});

// Question 19
// Create an array of programming languages and use forEach() to display each element along with its
// index.
// Example Output:
// 0 HTML
// 1 CSS
// 2 JavaScript

language = [
    { num: 1, language: `html` },
    { num: 1, language: `Css` },
    { num: 1, language: `JAvaScript` },
];

languag = language.forEach(language => {
    console.log(language);

});

// Question 20
// 20. Update an Array Using Multiple Methods
// Perform the following operations on an array:
// 1. Add "React" using push().
// 2. Remove the first element using shift().
// 3. Display the final array.
// Example:
// Input: ["HTML", "CSS", "JavaScript"]
// Final Output: ["CSS", "JavaScript", "React"] 
ar = ["HTML", "CSS", `Javascript`]
ar.push(`React`)

ar.shift()
console.log(ar);

