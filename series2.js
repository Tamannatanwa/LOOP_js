let x=require("readline-sync");
x=x.questionInt("enter the number:-");
let n=1;
let sum=0;
while (n<=x){
    let fac=1;
    while (n>0){
        fac=fac*n
        n=parseInt(n/10)
    }
    sum+=x**n/fac
    n++
}
console.log(1+sum);