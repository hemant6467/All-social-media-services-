// Section 1 – map() and Immutability 
// 1. Convert Product Names to Uppercase 
// Create an array of product names and use map() to create a new array where every product name is 
// converted to uppercase. 
// Example: 
// Input: 
// ["laptop", "mobile", "headphones"] 
// Output: 
// ["LAPTOP", "MOBILE", "HEADPHONES"]


let shop = ["laptop", "mobile", "headphones"];
shop1 = shop.map(shop => shop.toUpperCase())
console.log(shop1)



// 2. Add a Currency Symbol to Prices 
// Create an array of product prices and use map() to create a new array where each price is displayed with 
// a ₹ symbol. 
// Example: 
// Input: 
// [100, 250, 500] 
// Output: 
// ["₹100", "₹250", "₹500"]

let product = [100, 250, 500]
productprize = product.map(product => `₹${product}`)
console.log(productprize)


// 3. Extract User Names 
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


let arr = [
    { name: "Rahul", email: "rahul@example.com" },
    { name: "Priya", email: "priya@example.com" }
]
newarr = arr.map(arr => arr.name)
console.log(newarr)


// 4. Create Updated Product Prices 
// Create an array of product prices. Use map() to create a new array where every price is increased by 
// 10%. Keep the original array unchanged. 


productprize = [100, 200, 300]
console.log(`original prize`, productprize)
increaseprize = productprize.map(productprize => (productprize * 10) / 100 + productprize)
console.log(`increase prize`, increaseprize)


// 5. Update Object Data Immutably 
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



// let work = [
//     { name: "Rahul", role: "student" },
//     { name: "Priya", role: "student" }
// ]
// console.log(work.map(work => work.role))



// 6. Add a New Property Using map() 
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


// shop = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 500 }
// ]
// shop2=shop.map(shop=>shop,`instock:true`)
// console.log(shop2)



// Section 2 – map() vs forEach() 
// 7. Display Technologies Using forEach() 
// Create an array of frontend technologies and use forEach() to display every technology. 
// Example: 
// Input: 
// ["HTML", "CSS", "JavaScript"] 
// Output: 
// HTML 
// CSS 
// JavaScript

// html=["HTML", "CSS", "JavaScript"];
// html1=html.forEach(html=>html)
// console.log(html1)


// 8. Create a New Array Using map() 
// Using the same array of frontend technologies, use map() to create a new array where every technology 
// is converted to uppercase. 
// Example: 
// Input: 
// ["html", "css", "javascript"] 
// Output: 
// ["HTML", "CSS", "JAVASCRIPT"]


html = ["html", "css", "javascript"];
html3 = html.map(html => html.toUpperCase())
console.log(html3)


// 9. Format User Names Using map() 
// Create an array of names and use map() to add the text "User: " before every name. Display the new 
// array. 
// Example: 
// Input: 
// ["Rahul", "Priya", "Aman"] 
// Output: 
// ["User: Rahul", "User: Priya", "User: Aman"]


let naming = ["Rahul", "Priya", "Aman"]
naming1 = naming.map(naming => `user:${naming}`)
console.log(naming1)



// Section 3 – filter() 
// 10. Filter Available Products 
// Create an array of product objects containing name and inStock. Use filter() to create a new array 
// containing only the products that are in stock. 
// Example: 
// Input: 
// [ 
// { name: "Laptop", inStock: true }, 
// { name: "Mouse", inStock: false } 
// ] 
// Output: 
// [ 
// { name: "Laptop", inStock: true } 
// ]


shop = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
]
shop2 = shop.filter(shop => shop.inStock === true)
console.log(shop2)


// 11. Filter Users by Role 
// Create an array of user objects containing name and role. Use filter() to get all users whose role is 
// "developer". 
// Example: 
// Input: 
// [ 
// { name: "Rahul", role: "developer" }, 
// { name: "Priya", role: "student" } 
// ] 
// Output:[ 
// { name: "Rahul", role: "developer" } 
// ]



let name = [
    { name: "Rahul", role: "developer" },
    { name: "Priya", role: "student" },
    { name: "nitesh", role: 'developer' }
]
name1 = name.filter(name => name.role === "developer")
console.log(name1)



// 12. Filter Expensive Products 
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


shop = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "monitor", price: 2000 }
]
shop3 = shop.filter(shop => shop.price >= 1000)
console.log(shop3)


// 13. Filter Active Users 
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


shop = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
]

shop4 = shop.filter(shop => shop.isActive === true)
console.log(shop4)



// 14. Filter Gmail Addresses 
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com". 
// Example:Input: 
// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"] 
// Output: 
// ["rahul@gmail.com", "aman@gmail.com"]


let gmail = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]
gmail1 = gmail.filter(gmail => gmail.endsWith("@gmail.com"))
console.log(gmail1)



// Section 4 – reduce() and Accumulator Pattern 
// 15. Calculate the Total Cart Price 
// Create an array of product prices and use reduce() to calculate the total price of all items in the cart. 
// Example: 
// Input: 
// [500, 1200, 300] 
// Output: 
// 2000


let prize = [500, 1200, 300]
prize1 = prize.reduce(prize => prize)
console.log(prize1)


