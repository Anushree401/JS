console.log("Hello to my World!1111111111"); //to print
console.log("Anushree Balaji");
age = 24; //declaring, maybe the type is automatically defined with the value
name = "Anushree Balaji";
marks = 56.23;
val1 = null; //know that the value is empty
val2 = undefined; //dont know the value at all
bool1 = false;
bool2 = true;
console.log(age,name,marks,null,val1,undefined,val2,true,false,bool1,bool2);
/*sth;
console.log(sth);
gave error that value not defined
notice that it does not assign garbage value like C++ but throws exception like Java, butttttttttttttt*/
let a;
console.log(a); //output = undefined
//like every other progg lang, values are overwritten if changed
//dynamically typed
fullName = "";
_fullName = "";
$fullName = "";
//123fullName = ""; not allowed
//Reserved words: https://www.w3schools.com/js/js_reserved.asp
/*camel case: when we make first word of first letter small, and other first letter of other words capital in a variable name
example: firstName*/
/*
var == redeclare and update == global scope
let == not redeclare but update == block scope
const == not redeclare and not update == block scope
*/
//DONT USE VAR
var age1 = 24;
var age1 = 59;
var age1 = 36;
var age1 = age1+5;
console.log(age1); //no error
let age2 = 24;
/*let age2 = 59; //error
let age2 = 36; //error*/
age_new = age2+9; //no error
console.log(age2,age_new); //output = 24+9 = 33
const age3 = 24;
/*const age3 = 59; //error
const age3 = 36; //error
age_new = age3+9; //error */
console.log(age3); //24
//if u wanna update a let:
let n = 1;
n=3;
n=5;
console.log(n); //output = 5
//always give value to a constant variable
{
    let a = 5;
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}
//above are 2 diff blocks so the var a is diff in each block
