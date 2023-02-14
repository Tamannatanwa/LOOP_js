let a=require("readline-sync");
a=a.questionInt("enter the number")
let n=a;
let sum=0;
while (a>0){
    let r=a%10
    sum=sum+r**String(n).length
    a=parseInt(a/10)
}
if (sum==n){
    console.log(sum,"Armstrong number")
}
else{
    console.log(sum,"not armstrong number")
}




