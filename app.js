document.write("The Value Of a=10" ,"<br>")

let number=10;
document.write("Result:","</br>","The ++Number Is " ,++number);

let num2=11
document.write("</br>","Result:" ,"</br>", "The Number++ Is " ,num2++);
let num3=11
document.write("</br>","Result:" ,"</br>", "The --Number Is " , --num3);
let num4=11
document.write("</br>","Result:" ,"</br>", "The Number-- Is " , num4--,"</br>");

document.write("QUESTION NO 2","</br>")


let a=2;
let b=1;

let result= --a - --b + ++b +b--;
document.write(result);



let input=prompt("Please Enter Your Name")

document.write("<h1>Have A Good Day </h1>" , input ,"</br>")

document.write("<h1>The Table Calculator</h1>")
let table= +prompt("Enter The table Number",5)

document.write(table + "x" + "1" + "=" + table*1 + "</br>")
document.write(table + "x" + "2" + "=" + table*2 + "</br>")
document.write(table + "x" + "3" + "=" + table*3 + "</br>")
document.write(table + "x" + "4" + "=" + table*4 + "</br>")
document.write(table + "x" + "5" + "=" + table*5 + "</br>")
// document.write(table + "x" + "6" + "=" + table*6 + "</br>")
// document.write(table + "x" + "7" + "=" + table*7 + "</br>")
// document.write(table + "x" + "8" + "=" + table*8 + "</br>")
// document.write(table + "x" + "9" + "=" + table*9 + "</br>")
// document.write(table + "x" + "10" + "=" + table*10 +"</br>")


let subjects=prompt("Enter First Subject Name")
let subject2=prompt("Enter Second Subject Name")
let subject3=prompt("Enter Third Subject Name")

let tmarks=100;
let tmarks2=100;
let tmarks3=100;

let obtain= +prompt("Please Enter Your First Subject Marks ")
let obtain2= +prompt("Please Enter Your Second Subject Marks ")
let obtain3= +prompt("Please Enter Your Third Subject Marks ")


let percentage1 = obtain/tmarks*100 
let percentage2 = obtain2/tmarks2*100 
let percentage3 = obtain3/tmarks3*100 


document.write("<h1>Subjects</h1>",subjects,"</br>",subject2,"</br>",subject3)
document.write("<h1>Total Marks</h1>",tmarks,"</br>",tmarks2,"</br>",tmarks3,"</br>",tmarks+tmarks2+tmarks3)
document.write("<h1>Subjects</h1>",obtain,"</br>",obtain2,"</br>",obtain3,"</br>",obtain+obtain2+obtain3)
document.write("<h1>Subjects</h1>",percentage1,"</br>",percentage2,"</br>",percentage3,"</br>",(percentage1+percentage2+percentage3)/3,"%" )


