let a=require("readline-sync");
a=a.questionInt("enter the number");
let sum=0;
while (a>0){
    const r=a%10;
    sum+=r
    a=parseInt(a/10)
}
console.log(sum)