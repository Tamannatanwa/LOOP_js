let sum=1;
let n=require("readline-sync");
n=n.questionInt("enter the number");
let x=require("readline-sync");
x=x.questionInt("enter the number")
let i=1;
let fac=1;
while (i<=n){
    fac=fac*i;
    sum=sum+x**n/fac
    i++
}
console.log(sum)



