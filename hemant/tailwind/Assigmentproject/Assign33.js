// Create an array of product names and use map() to create a new array where every product name is 
// converted to uppercase. 
// Example: 
// Input: 
// ["laptop", "mobile", "headphones"] 
// Output: 
// ["LAPTOP", "MOBILE", "HEADPHONES"] 

// hemant= ["laptop", "mobile", "headphones"] ;
// upper= hemant.map(hemant=> hemant.toUpperCase());
// console.log(upper);

// question 2
// create an array of product prices and use map() to create a new array where each price is displayed with 
// a ₹ symbol. 
// Example: 
// Input: 
// [100, 250, 500] 
// Output: 
// ["₹100", "₹250", "₹500"] 
// doller =[100, 250, 500] ;
// doll= doller.map(doller =>`₹ ${doller}`)
// console.log(doll);

// Question 3
// Create an array of user objects containing name and email. Use map() to create a new array containing 
// only the names. 
// Example: 
// Input: 
// [ 
// { name: "Rahul", email: "rahul@example.com" }, 
// { name: "Priya", email: "priya@example.com" } 
// ] 
// Output: 
// ["Rahul", "Priya"] 

// email=[ 
// { name: "Rahul", email: "rahul@example.com" }, 
// { name: "Priya", email: "priya@example.com" } 
// ] 

// emails =email.map(email => email.name )
// console.log(emails);

// question 4
// Create an array of product prices. Use map() to create a new array where every price is increased by 
// 10%. Keep the original array unchanged. 
// Example: 
// Input: 
// [100, 200, 300] 
// Output: 
// Original: [100, 200, 300] 
// New: [110, 220, 330] 

// doller =[100, 200, 300];
// doll= doller.map(doller =>` ${doller+10}`)
// console.log(doll);

// question 5
// Create an array of user objects with name and role. Use map() and the spread operator to create a new 
// array where the role of every user is changed to "developer" without modifying the original array. 
// Example: 
// Input: 
// [ 
// { name: "Rahul", role: "student" }, 
// { name: "Priya", role: "student" } 
// ] 
// Output: 
// [ 
// { name: "Rahul", role: "developer" }, 
// { name: "Priya", role: "developer" } 
// ] 

// let student=[ 
// { name: "Rahul", role: "student" }, 
// { name: "Priya", role: "student" } 
// ] 

// developer= student.map(student => ({
//     ...student,
//     role: `Developer`
// }))
// console.log(developer);

// Question 6
// Create an array of product objects containing name and price. Use map() to create a new array where 
// each product also has an inStock property with the value true. 
// Example: 
// Input: 
// [ 
// { name: "Laptop", price: 50000 }, 
// { name: "Mouse", price: 500 } 
// ] 
// Output: 
// [ 
// { name: "Laptop", price: 50000, inStock: true }, 
// { name: "Mouse", price: 500, inStock: true } 
// ]

// let instock= [ 
// { name: "Laptop", price: 50000 }, 
// { name: "Mouse", price: 500 } 
// ] 

// stock= instock.map(instock =>({
//     ...instock,

//  inStock: true

// }))
// console.log(stock)

//Question 7
// 7. Display Technologies Using forEach() 
// Create an array of frontend technologies and use forEach() to display every technology. 
// Example: 
// Input: 
// ["HTML", "CSS", "JavaScript"] 
// Output: 
// HTML 
// CSS 
// JavaScript 
// frontend=["HTML", "CSS", "JavaScript"] ;

// frontend.forEach((front)=>{
// console.log(front)
// })

// // Question 8
// Using the same array of frontend technologies, use map() to create a new array where every technology 
// is converted to uppercase. 
// Example: 
// Input: 
// ["html", "css", "javascript"] 
// Output: 
// ["HTML", "CSS", "JAVASCRIPT"] 
// let uppercase= ["html", "css", "javascript"] ;
// upper=uppercase.map( (uppercase)=>uppercase.toUpperCase(`HTML`))
// console.log(upper);

// Question 9
// reate an array of names and use map() to add the text "User: " before every name. Display the new 
// array. 
// Example: 
// Input: 
// ["Rahul", "Priya", "Aman"] 
// Output: 
// ["User: Rahul", "User: Priya", "User: Aman"] 

// let name=["Rahul", "Priya", "Aman"] ;
// nam= name.map(name=> ` user:${name}`)
// console.log(nam);



// Question 10
// 10. Filter Available Products 
// Create an array of product objects containing name and inStock. Use filter() to create a new array 
// containing only the products that are in stock. 
// Example: 
// Input: 
// [ { name: "Laptop", inStock: true }, 
// { name: "Mouse", inStock: false } ] 
// Output: 
// [ { name: "Laptop", inStock: true }  ] 

// protucts= [ { name: "Laptop", inStock: true }, 
// { name: "Mouse", inStock: false } ] 

// pro = protucts.filter(protucts=> protucts.inStock=== true)
// console.log(pro);



// Question 11.
// Create an array of user objects containing name and role. Use filter() to get all users whose role is 
// "developer". 
// Example: 
// Input:   [  { name: "Rahul", role: "developer" }, 
//          { name: "Priya", role: "student" } ] 
// Output: 
//  [ 
// { name: "Rahul", role: "developer" } 
// ] 
// roes=    [  { name: "Rahul", role: "developer" }, 
//          { name: "Priya", role: "student" } ] 
// student = roes.filter(roes => roes.role === "developer")

// console.log(student);
       

// Question 12
// Create an array of product objects containing name and price. Use filter() to get products with a price 
// greater than 1000. 
// Example: 
// Input: 
// [ 
// { name: "Mouse", price: 500 }, 
// { name: "Keyboard", price: 1500 } 
// ] 
// Output: 
// [ 
// { name: "Keyboard", price: 1500 } 
// ] 
// prices=  [ 
// { name: "Mouse", price: 500 }, 
// { name: "Keyboard", price: 1500 } 
// ]
// key = prices.filter(prices=> prices.price >1000)
// console.log(key);


// Question 13
// Create an array of users containing name and isActive. Use filter() to get only the active users. 
// Example: 
// Input: 
// [ 
// { name: "Rahul", isActive: true }, 
// { name: "Priya", isActive: false } 
// ] 
// Output: 
// [ 
// { name: "Rahul", isActive: true } 
// ] 
// user=[ 
// { name: "Rahul", isActive: true }, 
// { name: "Priya", isActive: false } 
// ] 
// Active= user.filter(user=> user.isActive=== true)
// console.log(Active);


// question 14
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com". 
// Example: nput: 
// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"] 
// Output: 
// ["rahul@gmail.com", "aman@gmail.com"] 

// let gmail= ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"] 

// adress= gmail.filter(gmail => gmail.includes(`@gmail.com`))
// console.log(adress);


// Question 15
// 15. Calculate the Total Cart Price 
// Create an array of product prices and use reduce() to calculate the total price of all items in the cart. 
// Example: 
// Input: 
// [500, 1200, 300] 
// Output: 
// 2000 

// let cart=  [500, 1200, 300] 
// total =cart.reduce((hello,hii)=>{
//     hemant= hello+hii;
//     return hemant;
// })


// console.log(hemant);


// Question 16
// Create an array of product names and use reduce() with an accumulator to count the total number of 
// products. 
// Example: 
// Input: 
// ["Laptop", "Mouse", "Keyboard"] 
// Output: 
// 3 
let count= ["Laptop", "Mouse", "Keyboard"] 
 const total =count.reduce((containin,contain)=>{
return containin+1
},0)


console.log(total);


// Question 17
// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total 
// quantity of all items. 
// Example: 
// Input: 
// [ 
// { name: "Laptop", quantity: 1 }, 
// { name: "Mouse", quantity: 2 } 
// ] 
// Output: 
// 3
let quantityt=[ 
{ name: "Laptop", quantity: 1 }, 
{ name: "Mouse", quantity: 2 } 
]  
 const quant =quantityt.reduce((containin,contain  )=>{
return containin+ contain.quantity
},0)


console.log(quant);

// Question 18
// Create an array of order objects containing amount. Use reduce() to calculate the total order amount. 
// Example: 
// Input: 
// [ 
// { amount: 500 }, 
// { amount: 1000 }, 
// { amount: 750 } 
// ] 
// Output: 
// 2250 

let containing=  [ 
{ amount: 500 }, 
{ amount: 1000 }, 
{ amount: 750 } 
] 

 const amount =containing.reduce((containin,contain  )=>{
return containin+ contain.amount
},0)
console.log(amount);

// Question 19
// 19. Create a Comma-Separated String 
// Create an array of frontend technologies and use reduce() to combine them into a single 
// comma-separated string. 
// Example: 
// Input: 
// ["HTML", "CSS", "JavaScript"] 
// Output: 
// "HTML, CSS, JavaScript" 
let comma = ["HTML", "CSS", "JavaScript"] 
let com= comma.reduce((acc, curr, index)=>{
if(index===0){
return curr;
}
return acc +`,`+index;
},``)
console.log(comma)

// question 20
// Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final 
// cart total by multiplying the price and quantity of each item. 
// Example 
// Input: 
// [ 
// { name: "Mouse", price: 500, quantity: 2 }, 
// { name: "Keyboard", price: 1000, quantity: 1 } 
// ] 
// Output: 
// 2000 

// let cart=[ 
// { name: "Mouse", price: 500, quantity: 2 }, 
// { name: "Keyboard", price: 1000, quantity: 1 } 
// ] 

let cartprice= cart.reduce((pri,quant)=>{
    return  pri+ (quant.price*quant.quantity);
},0)
console.log(cartprice)