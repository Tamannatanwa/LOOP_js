let a=require("readline-sync");
a=a.questionInt("enter the number:-");
let b=require("readline-sync");
b=b.questionInt("enter the number:-");
let c=a+b;
if (c>=15 && c<=20){
    console.log("20")
}
else{
    console.log(c)
}