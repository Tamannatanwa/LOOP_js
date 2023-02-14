let a=require("readline-sync");
a=a.questionInt("enter the number:-");
let mul=1;
while (a>0){
    mul*=a;
    a=a-1
}
console.log(mul)