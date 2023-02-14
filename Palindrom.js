let a=require("readline-sync");
a=a.questionInt("enter the number");
let b=a;
let sum=0;
while (a>0){
    sum=sum*10+(a%10);
    a=parseInt(a/10)
}
if (b==sum){
    console.log(sum,"palindrom")
}
else{
    console.log(sum,"not palindrom")
}
