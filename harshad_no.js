let a=require("readline-sync");
a=a.questionInt("enter the number")
let sum=0;
let n=a;
while (a>0){
    sum+=a%10
    a=parseInt(a/10)
}
if (n%sum==0){
    console.log("harshad number")
}
else{
    console.log("not harshad number")
}