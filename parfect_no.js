let a=require("readline-sync");
a=a.questionInt("enter the number");
let n=a;
let sum=0;
let i=1;
while (i<a){
    if (a%i==0){
        sum+=i
    }
    i++
}
if (n==sum){
    console.log(sum,"perfect number")
}
else{
    console.log(sum,"not perfect number")
}