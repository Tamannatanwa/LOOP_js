let a=require("readline-sync");
a=a.questionInt("enter the number");
let mul=1;
while (a>0){
    const r=a%10;
    mul*=r
    a=parseInt(a/10)
}
console.log(mul)