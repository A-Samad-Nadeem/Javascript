// Question No 1
// ====================
document.write("<h1>The Calculator</h1>")
let number1= +prompt("Enter Number One");
let number2= +prompt("Enter Number two");

let sum=number1+number2;
document.write("Addition of Numbers "+ "=" + sum + "</br>")

let sub=number1-number2;
document.write("Subtraction of Numbers " + "=" + sub + "</br>")

let product=number1*number2;
document.write("Multiplication of Numbers " + "=" + product + "</br>")

let division=number1/number2;
document.write("Division of Numbers " + "=" + division + "</br>")

let remnder=number1%number2;
document.write("Reminder of Numbers " + "=" + remnder + "</br>")

// Question No 2
// =================
// let declare=
// console.log(declare)


let initialnumber=(5);
document.write(++initialnumber + "</br>")
initialnumber=initialnumber+7;

document.write("Value After Addition Is " +initialnumber + "</br>")

document.write("Value  After Declaration Is " + --initialnumber + "</br>");

let reminder=initialnumber%3;
document.write("Modulus Of the Value Is " + reminder + "</br>")




// Question No 3
// =================
document.write("<h1>The Ticket Calculator</h1>")

let ticketquantity= +prompt("Enter Quantity Of Tickets ");

let price_of_tickets=(300);

let total_cost=ticketquantity*price_of_tickets;

document.write("Total Price Of Tickets Is " + total_cost + "</br>");

// Question No 4
// ====================
document.write("<h1>The TAble Calculator</h1>")
let table= +prompt("Enter The table Number")

document.write(table + "x" + "1" + "=" + table*1 + "</br>")
document.write(table + "x" + "2" + "=" + table*2 + "</br>")
document.write(table + "x" + "3" + "=" + table*3 + "</br>")
document.write(table + "x" + "4" + "=" + table*4 + "</br>")
document.write(table + "x" + "5" + "=" + table*5 + "</br>")
document.write(table + "x" + "6" + "=" + table*6 + "</br>")
document.write(table + "x" + "7" + "=" + table*7 + "</br>")
document.write(table + "x" + "8" + "=" + table*8 + "</br>")
document.write(table + "x" + "9" + "=" + table*9 + "</br>")
document.write(table + "x" + "10" + "=" + table*10 +"</br>")

// Question No5
// ================
document.write("<h1>The Temperature Calculator</h1>")
let celsius= +prompt("Enter Temprature For Farhenhiet")

let farhen= (9/5 * celsius ) + 32;

document.write("Temprature In Farhenhiet Is " +  farhen + "F" + "<sup>0</sup>" + "</br>")
let feh= +prompt("Enter Temprature For Celsius")

let cels= (feh - 32) * 5/9;

document.write("Temprature In Celsius Is "+  cels + "C" + "<sup>0</sup>" + "</br>")


// question no6
// ===================
document.write("<h1>The Shopping Cart</h1>")

let price1= +prompt("enter price of item 1")
let price2= +prompt("enter price of item 2")
let quant1= +prompt("enter quantity of item 1")
let quant2= +prompt("enter quantity of item 2")

let shipping_charges=(200);

let total_bill=(price1+price2) * (quant1+quant2) + shipping_charges;

document.write("The Total Bill Of The Items Is " +total_bill + "</br>");



// question no 7
// ================
document.write("<h1>Percentage Calculator</h1>")
let Obtained_marks= +prompt("Enter The Obtained Marks")
let Max_marks=(550);

let percentage=(Obtained_marks/Max_marks) * 100

document.write("Your Percentage Is " + percentage + "%" + "</br>")


// Quesion No 8
// ==============
document.write("<h1>$ and riyal Into PKR</h1>")
let usDollar= +prompt("enter your Dollars")
let saudiRiyal= +prompt("enter your Riyals")

let $=280;
let riyal=70

let $inPKR=usDollar*$;
let RiyalinPKR=saudiRiyal*riyal

document.write("Your Dollars In PKR  Is " + $inPKR +"</br>")
document.write("Your Riyals In PKR  Is " + RiyalinPKR + "</br>")

// Question No 9
// ===================
document.write("<h1>Age Calculator</h1>")
let DOB= +prompt("Enter Your Year of Birth")
let Present= 2024

let age =Present-DOB;
document.write("Your Age Is " + age + "</br>")



// Question No 10
// ================

document.write("<h1>The Geometrizers</h1>")

let radius= +prompt("Enter The Raidus Of The Circle")

let circumference=2*3.142*radius;

let area=2*3.142**radius

document.write("The Circumference Of the Circle Is " + circumference + "m" + "</br>")
document.write("The Area Of The Circle Is " + area + "</br>")




