document.write("The Console can be used to log information"+"<br>")
console.log("i toooooooo")
alert("hello")
var name="vinay"+"<br>"/*variable declaration*/
var age=20
document.write(name,age+"<br>")
let name1="GOUD"+"<br>"
let num=407
name2="vin"
document.write(name1)
document.write(num)
document.write(name2+"<br>")
name3="sita"
console.log(name3)
const name4=("vinai")
document.write(name4+"<br>")
/*if the error occur in the middle of the code the program will be terminated upto that */
/*global and local scopes*/
 var name5="PRATHEEK"/*global scope(here we can get the accessibility at any where) */
function js(){
    var name6="PRASVI"
    document.write(name6+"<br>")
var age=5
document.write(name5+"<br>")
document.write(age+"<br>")
}
js()
document.write(name5+"<br>")
/*document.write(name6+"<br>")--->local scope cant execute in the outside*/
/*data types*/
var std={
    nam:"prabha",
    rolno:407,
    email:"vinay@143.com"
}
document.write(std.email+"<br>")/*for display mail*/ 
for(let x in std){    /*used for printing all detail of std in singleline i.e here we use for loop*/
    document.write(std[x]+"<br>")
}
//operators:operators are used to perform the operations//
/*types of operators:
arithmatic
assignement(=assign,+=add and assign:a=10,a+=20,o/p is 30 lly *=,-=,/=)
Comparison(relational)
logical*/
//CONDITIONAL STMNTS:if acondition true it performs one operation otherwise it perform another //
/*types:if 
if else
if else if else
nested if*/
//PRINT TABLES using for loop//
document.write("PRINT 2 TABLE"+"<br>");
for(x=0;x<10;x++)/*2 table*/
{
    document.write("2*"+x+"="+(2*x)+"<br>")
}
/*if stmt*/
let a=18
if(a>=18){
    document.write("eligible for voting"+"<br>")
    document.write("ur age is:"+a+"<br>")
}
/*if else*/
let b=50
if(b>=30)
{
    document.write("you are qualified"+"<br>")
    document.write("u got marks as:"+b+"<br>")

}
else{
    document.write("you are not qualified")
}
//if else//
let c=60
if(c>20){
    document.write("pass"+"<br>")
    document.write("u got marks:"+c)
}
else if(c>30)
{
    document.write("1st class")
document.write("u got marks:"+c)


}
else{
    document.write("fail")
    document.write("u got marks:"+c)
}
