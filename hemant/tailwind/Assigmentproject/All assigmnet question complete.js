// Section 2

//  Even or odd    take a number and cheak whether it is even or odd use the % operator

let nums =17;
if (nums %2 === 0 ) {
    console.log(`even`);

} else {
    console.log(`odd`);

}


// positive, nigatice ,Zero         
//    take a number and determin whether it is..    positive *** Negative *** Zero

let num1= 0;
if (num1 < 0) {
    console.log(`nigative vallue `);

} else if( num1 > 0) {
    console.log(`positive value`);

} else if ( num1 == 0){
console.log(`Zeerro`);
}


// Take two number.   Display    *** first number  is greater  *** Second number is greater  *** both  number Equal....????

let number1 = 29;
let number2 = 25;
if (number1 > number2) {
    console.log("first number is greater");

} 
else if ( number2 >number1){
    console.log("second number is greater");

}
else{
    console.log( `both number is equal`);

}


// Take threee number and find the greatest number using if-else ..  do not use arrays or any built-in maximum function..???

let x =2;
let y= 3;
let z= 4;

if (x>y && x>z) {
    console.log(`x ,x is the greater number`);

} else if (y>x && y>z){
    console.log(`y , y is the greater number`);

}else if( z>x && z> y){
 console.log( `z, z is the greater number`);

}else{

}


// 
// Take : ( age , haslicense)  A person can drive only when :       ** Age is 18 above    **** they have a valid license      Use a logical operator....         

let ages = 18;
minimum_age =20;
haslencse = true;
if (ages < 20 ) {
    console.log(`not axcess haslicense`);

} else if(ages>20 && haslencse ) {
    console.log(`valid for license`);

}

// question 10 

//  take a person"s age     Age >= 18 Eligible to vote   *** Age <18 Not eligible to vote

// let userage = 18;
if (userage >= 18) {
    console.log(`Eligible to vote`);

} else if( userage < 18) {
      console.log(`Not Eligible to vote`);
}


// Question 12
//Take a number 
// Check whether the number is between 10 and 100 , including boundaries..   Example :   Input : 50    output : number is between 10 se 100

// let input= 5;

// if (input >= 10 && input <= 100) {
//     console.log(`number 10 se 100`);

// } else{
//      console.log(`  Not number 10 se 100`);
// }

// Question 13 
//    Take a students percentage ... 
// assign a grade   90--100 ---> A  **  80---89  --->B  ** 70 --79 --> C
//  60 --- 69 --> D   40 -- 59 --->E Blow 40 fail 


let grades = 70;

if (grades >= 90 || grades >=100) {
    console.log(`Grade A`);

} else  if ( grades >= 80 || grades >= 89 ){
    console.log(`Grade b`);

}else if ( grades >= 70|| grades >= 79 ){
 console.log(`Grade c`);
}else if ( grades >= 60 || grades >= 69){
 console.log(`Grade D`);
}else if ( grades >= 40 || grades >= 59){
 console.log(`Grade E`);
}else if ( grades >= 40){
 console.log(`Grade F`);
}

// Question 14
// A >= 75 distinction  A>= 60 first divition   A>= 50 Second divition   A>= 40 fail 

let score = 80;
if (score>= 75) {
    console.log(`distinction`);


} else  if ( score >= 60 ){

    console.log(`first devition`);


}else if ( score >= 50){

    console.log(`Second divition `);

}else if ( score>= 40){
 console.log(`  fail`);
}

// question 15 
//Calculate the bill using:
// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// Above 200 → ₹10 per unit
// Example:
// Units = 250
// First 100 → 100 × 5
// Next 100 → 100 × 7
// Remaining → 50 × 10
// Display the final bill 

let unit = 100;
if (unit<= 0 || unit <=100 ) {
    console.log(`₹5 per unit=`, unit*5 );


} else  if (unit<= 101|| unit <=200 ) {
    console.log(`₹7 per unit=`, unit*7 );


}else if (unit>= 200 ) {
    console.log(`₹10 per unit=`, unit*10);

}
// Question 16
// username
// password
// Correct credentials:
// username = "admin"
// password = "12345"
// If both are correct:
// Login successful
// Otherwise:
// Invalid username or password
// Use the logical && operator.

user = true;

let password = 10235 ;
// let hemant = password;
if (password ==12345 && user ==true) {
    console.log(`Login successful`);

} else {
   console.log(`Invalid username or password`);

}

// question 17
// Bonus rules:
// Experience >= 10 years → 20% bonus
// Experience >= 5 years → 10% bonus
// Experience >= 2 years → 5% bonus
// Below 2 years → No bonus
// Calculate and display:
// ● Original salary
// ● Bonus
// ● Final salary

let spend = 2;
if (spend > 0 && spend <= 2) {
    console.log(`5% bonus =`, spend * 5 / 100);


} else if (spend >2 && spend <= 5) {
    console.log(` 10% bonus =`, spend * 10 / 100);


} else if (spend > 5 && spend <= 10) {
    console.log(`20% bonus =`, spend * 20 / 100);

}
else {
    console.log(`error`)
}

// Question --18
// 0–12 → Child
// 13–19 → Teenager
// 20–59 → Adult
// 60+ → Senior Citizen


let years =32;
if (years > 0 && years <= 12) {
    console.log(`child`);


} else if (years >13 && years <= 19) {
    console.log(`Teenager`);

} else if (years > 20 && years <= 59) {
     console.log(`Adult`);

}
else {
    console.log(`Senior Citizen`);
}

//  question -- 19
// Take a number from 1 to 7.
// Using switch-case:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// For any other number:
// Invalid day

let day= 3;
switch(day){
 case  1: 
 console.log(`monday`);
 break;
 case  2: 
 console.log(`Tuesday`);
 break;
 case  3: 
 console.log(`wednesday`);
 break;
 case  4: 
 console.log(`thursday`);
 break;
 case  5: 
 console.log(`friday`);
 break;
 case  6: 
 console.log(`saturday`);
 break;
case  7: 
 console.log(`satuday`);
 break;

 default:
    console.log(`default days`);
    
}

// Question -- 20
// ● First number
// ● Second number
// ● Operator
// Supported operators:
// +
// -
// *
// /
// %
// Use switch-case.
// Example:
// First number: 20
// Second number: 5
// Operator: *
// Output: 100

let numbers1 =20;
let numbers2 = 5;

let operators =`*`;

switch(operators){
    case `+`:
        console.log(numbers1+numbers2);
        break;
   case `-`:
        console.log(numbers1- numbers2);
        break;
   case `*`:
        console.log(numbers1*numbers2);
        break;
    case `/`:
        console.log(numbers1/numbers2);
        break;
    case `%`:
        console.log(numbers1%numbers2);
        break;
                          
}

// Question 21
// Use switch-case to display the corresponding month.
// Example:
// 1 → January
// 2 → February
// 3 → March
// ...
// 12 → December
// For an invalid number:
// Invalid month

let month =10;
switch(month){
    case 1:
        console.log(`january`);
        break;
     case 1:
        console.log(`january`);
        break;
     case 1:
        console.log(`january`);
        break;
     case 1:
        console.log(`feb`);
        break;
     case 4:
        console.log(`april`);
        break;
     case 5:
        console.log(`may`);
        break;
     case 6:
        console.log(`june`);
        break;
     case 7:
        console.log(`july`);
        break;
     case 8:
        console.log(`Aug`);
        break;
     case 9:
        console.log(`sept`);
        break;
     case 10:
        console.log(`oct`);
        break;
     case 11:
        console.log(`nov`);
        break;
     case 12:
        console.log(`dec`);
        break;
        
     default:
        console.log(`Inviled Month`);
}

//  question 22
// Create this menu:
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Modulus
// Take the user’s choice and two number

 let digit1 =20;
let digit2 = 5;

let operator =`*`;

switch(operator){
    case `+`:
        console.log(digit1+digit2)
   case `-`:
      console.log(digit1-digit2)
        break;
   case `*`:console.log(digit1*digit2)
     break;
    case `/`:
      console.log(digit1/digit2)
       break;
    case `%`:
     console.log(digit1%digit2)
        break;
                          
}

// question 23 
// Take a traffic signal color:
// "red"
// "yellow"
// "green"
// Use switch-case.
// Display:

let  color = `yellow` ;

switch(color){
    case `red`:
     console.log(`red`)
        break;
     case `yellow`:
     console.log(`yellow`)
        break;  
     case `green`:
     console.log(`green`)
        break;   
   default:
    console.log(`invalid signal`);
                   
}

// Question 24
// Create variables:
// balance
// withdrawAmount
// Check:
// 1. Withdrawal amount must be greater than 0.
// 2. Withdrawal amount must not be greater than the balance.
// 3. If valid, subtract the withdrawal amount.
// 4. Display the remaining balance.
// Example:
// Balance: ₹10000
// Withdraw: ₹3000
// Withdrawal successful
// Remaining balance: ₹7000


let balances = 10000;
let withdrawAmount = 3000;

if (withdrawAmount > 0 && withdrawAmount <= balances) {
    balance = balances - withdrawAmount;
    console.log("Withdrawal successful");
    console.log("Remaining balance: ₹" + balances);
} else {
    console.log("Withdrawal failed");
}

// Question 25
// age
// numberOfTickets
// Ticket prices:
// Age below 12 → ₹100
// Age 12–59 → ₹200
// Age 60+ → ₹120
// Calculate the total ticket price.

let age =1;
if ( age >= 12) {
    console.log(`₹100`);


} else if (age >12 && age <= 59) {
    console.log(`₹200`);

} else if (age >= 60) {
     console.log(`₹120`);

}
else {
    console.log(`not ilegble`);
}


// Question 26
// 1. Burger → ₹150
// 2. Pizza → ₹250
// 3. Pasta → ₹180
// 4. Sandwich → ₹120
// Take the customer’s choice and quantity.
// Use switch-case to calculate the total price.
// Example:
// Choice: 2
// Quantity: 3
// Total: ₹750

let  item = `pizza` ;
quantity = 2
switch(item){

    case `Burger`:

     console.log(`burger=`,quantity*150)

        break;
     case `pizza`:

     console.log(`pizza=`,quantity*250)

        break;
    case `pasta`:

     console.log(`pasta=`,quantity*180)

        break;   
        case `sanwitch`:

     console.log(`sendwitch=`,quantity*120)

        break;
   default:
    console.log(`invalid item`);
                   
}


// Question 27

// Calculate the bill using:
// 0–100 → ₹5/unit
// 101–200 → ₹7/unit
// Above 200 → ₹10/unit
// Then apply:
// Bill >= ₹2000 → 10% discount
// Otherwise → No discount
// Display:
// Units
// Original Bill
// Discount
// Final Bill
// Step 1: Units consumed input

let units = 2050; // Aap yahan koi bhi value daal sakte hain

let originalBill = 0;

// Step 2: Slab calculation
if (units <= 100) {
    originalBill = units * 5;
} else if (units <= 200) {
    originalBill = (100 * 5) + ((units - 100) * 7);
} else {
    originalBill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

// Step 3: Discount calculation
let discount = 0;
if (originalBill >= 2000) {
    discount = originalBill * 0.10; // 10% discount
} else {
    discount = 0;
}

// Step 4: Final bill calculation
let finalBill = originalBill - discount;

// Step 5: Output display
console.log("Units: " + units);
console.log("Original Bill: ₹" + originalBill);
console.log("Discount: ₹" + discount);
console.log("Final Bill: ₹" + finalBill);

// Question 28

// 1. Check Balance
// 2. Deposit Money
// 3. Withdraw Money
// 4. Exit
// Use switch-case.
// Rules:
// ● Check Balance → Display current balance
// ● Deposit → Add money to balance
// ● Withdraw → Check whether sufficient balance exists
// ● Exit → Display a goodbye message
// ● Invalid choice → Display an error message

// Initial values
// Initial values
let balance = 40000;
let depositAmount = 5000;
let withdrawalAmount = 4676;

// Choice: 1: Check Balance, 2: Deposit, 3: Withdraw, 4: Exit
let choice = 2; // Testing ke liye yahan 1, 2, 3, ya 4 daal kar check karein

switch (choice) {
  case 1:
    console.log(`Current Balance: ₹${balance}`);
    break;

  case 2:
    balance += depositAmount; // Balance add kiya
    console.log(`deposited: ₹${depositAmount}`);
    console.log(`Updated Balance: ₹${balance}`);
    break;

  case 3:
    // Check if sufficient balance exists
    if (balance >= withdrawalAmount) {
      balance -= withdrawalAmount;
      console.log(`Withdrawn: ₹${withdrawalAmount}`);
      console.log(`Remaining Balance: ₹${balance}`);
    } else {
      console.log("Error: Insufficient balance!");
    }
    break;

  case 4:
    console.log("Thank you! Goodbye.");
    break;

  default:
    console.log("Invalid choice! Please select 1, 2, 3, or 4.");
}

// question 29 
// Question 29: Number Classification
let num = 150; // Yahan koi bhi number dekar test kar sakte hain

// 1. Positive, Negative, ya Zero check karna
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. Even ya Odd check karna
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Greater than 100, Less than 100, ya Equal to 100 check karna
if (num > 100) {
  console.log("Greater than 100");
} else if (num < 100) {
  console.log("Less than 100");
} else {
  console.log("Equal to 100");
}



// question 30
let studentName = "Rahul";
let rollNumber = 101;
let mathMarks = 85, scienceMarks = 78, englishMarks = 92;

let total = mathMarks + scienceMarks + englishMarks;
let percentage = (total / 300) * 100;

let result = (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) ? "PASS" : "FAIL";

let grade = percentage >= 90 ? "A" :
            percentage >= 80 ? "B" :
            percentage >= 70 ? "C" :
            percentage >= 60 ? "D" :
            percentage >= 40 ? "E" : "F";

// Simple Console Output
console.log("Name:", studentName);
console.log("Roll No:", rollNumber);
console.log("Math:", mathMarks);
console.log("Science:", scienceMarks);
console.log("English:", englishMarks);
console.log("Total:", total);
console.log("Percentage:", percentage.toFixed(0) + "%");
console.log("Grade:", grade);
console.log("Result:", result);


