

// Section 1 - Basic Array Operations 
// 1. Create and Display an Array 
// Create an array containing the names of five fruits and display the complete array.

let fruitsNAme = ["apple ", "banana", "mango", "guava", "grapes"]
console.log(fruitsNAme)


// 2. Add an Element Using push() 
// Create the following array and use push() to add "JavaScript" at the end. 
// Example: 
// Input: ["HTML", "CSS"] 
// Output: ["HTML", "CSS", "JavaScript"]


let html = ["HTML", "CSS"]
html.push("javascript")
console.log(html)



// 3. Remove an Element Using pop() 
// Remove the last element from the given array using pop(). 
// Example: 
// Input: ["HTML", "CSS", "JavaScript"] 
// Output: ["HTML", "CSS"] 


html = ["HTML", "CSS", "JavaScript"]
html.pop();
console.log(html)

// 4. Remove the First Element Using shift() 
// Remove the first element from the following array using shift(). 
// Example: 
// Input: ["Red", "Blue", "Green"] 
// Output: ["Blue", "Green"] 

let color = ["Red", "Blue", "Green"]
color.shift(1)
console.log(color)


// 5. Add an Element at the Beginning 
// Use unshift() to add "HTML" at the beginning of the following array. 
// Example: 
// Input: ["CSS", "JavaScript"] 
// Output: ["HTML", "CSS", "JavaScript"]


html = ["CSS", "JavaScript"]
html.unshift("HTML")
console.log(html)


// 6. Add Multiple Elements 
// Create an array containing two programming languages and use push() to add two more languages to 
// the array. 
// Example: 
// Input: ["HTML", "CSS"]  
// After adding: "JavaScript" and "React"   
// Output: ["HTML", "CSS", "JavaScript", "React"] 

html = ["HTML", 'css']
html.push("javascript")
html.push("react")
console.log(html)



// Section 2 - splice() and slice() 
// 7. Remove an Element Using splice() 
// Remove "CSS" from the following array using splice(). 
// Example: 
// Input: ["HTML", "CSS", "JavaScript", "React"] 
// Output: ["HTML", "JavaScript", "React"]

html = ["HTML", "CSS", "JavaScript", "React"]
html.splice(1, 1)
console.log(html)


// 8. Add an Element Using splice() 
// Use splice() to add "CSS" between "HTML" and "JavaScript". 
// Example: 
// Input: ["HTML", "JavaScript"] 
// Output: ["HTML", "CSS", "JavaScript"]


html = ["HTML", "JavaScript"]
html.splice(1, 0, "CSS")
console.log(html)


// 9. Replace an Array Element 
// Use splice() to replace "Java" with "JavaScript". 
// Example: 
// Input: ["HTML", "CSS", "Java"] 
// Output: ["HTML", "CSS", "JavaScript"]


html = ["HTML", "CSS", "Java"]
html.splice(2, 1, "javascript")
console.log(html)


// 10. Extract Part of an Array 
// Use slice() to create a new array containing "CSS", "JavaScript", and "React". 
// Example: 
// Input: ["HTML", "CSS", "JavaScript", "React", "Node.js"] 
// Output: ["CSS", "JavaScript", "React"]

html = ["HTML", "CSS", "JavaScript", "React", "Node.js"]
html.slice(2, 2);
console.log(html)


// 11. Create a Copy Using slice() 
// Create an array of your choice and use slice() without any arguments to create a copy of that array.

html = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
html.slice();
console.log(html)




// Section 3 - Searching in Arrays 
// 12. Find the Index of an Element 
// Use indexOf() to find the index of "JavaScript". 
// Example: 
// Input: ["HTML", "CSS", "JavaScript", "React"] 
// Output: 2 



html = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
html.indexOf("JavaScript")
console.log(html.indexOf("JavaScript"))



// 13. Find an Element Using indexOf() 
// Create an array of programming languages and use indexOf() to find the position of "React". 


html = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
console.log(html.indexOf("React"))


// 14. Find an Object Using find() 
// Create an array of user objects containing name and age. Use find() to get the user whose name is 
// "Rahul".


let array = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]
result = array.find(array => array.name === "Rahul")
console.log(result)



// 15. Find an Index Using findIndex() 
// Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya". 
// Example: 
// [ 
// ] 
// { name: "Rahul", age: 20 }, 
// { name: "Priya", age: 22 }


let find_index = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]

result = find_index.findIndex(find_index => find_index.name === "Priya")
console.log(result)




// Section 4 - Other Array Methods 
// 16. Flatten a Nested Array 
// Use flat() to convert the nested array into a single-level array. 
// Example: 
// Input: [1, 2, [3, 4]] 
// Output: [1, 2, 3, 4]


let nested1 = [1, 2, [3, 4]]
console.log(nested1.flat())


// 17. Flatten a Multi-Level Array 
// Use flat() with an appropriate depth to flatten the following array completely. 
// Example: 
// Input: [1, [2, [3, 4]]] 
// Output: [1, 2, 3, 4]

let nested2 = [1, 2, [3, [4, 5, [6, 7, [8, [9, 10]]]]]];
console.log(nested2.flat(Infinity))


// 18. Display Every Element Using forEach() 
// Create an array containing five colors and use forEach() to display every color.


// color = [
//     "red", "green", "blue", "yellow", "pink"
// ]
// newcolor = []
// newcolr = color.forEach(newcolo)
// console.log(newcolor)


// 19. Display Elements with Their Index 
// Create an array of programming languages and use forEach() to display each element along with its 
// index. 
// Example Output: 
// 0 HTML 
// 1 CSS 
// 2 JavaScript

// html = [
//     { num: 1, language: `html` },
//     { num: 1, language: `Css` },
//     { num: 1, language: `JAvaScript` },
// ];
// html2 = html.forEach(html =language)



// 20. Update an Array Using Multiple Methods 
// Perform the following operations on an array: 
// 1. Add "React" using push(). 
// 2. Remove the first element using shift(). 
// 3. Display the final array.

html = ["HTML", "CSS", "JavaScript"];
html.push("React");
html.shift("HTML");
console.log(html)