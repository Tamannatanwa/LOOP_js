let a=require("readline-sync");
a=a.questionInt("enter the number:-")
let b=" ";
while(a>0){
    const r=a%10;
    b+=r;
    a=parseInt(a/10)
}
console.log(Number(b));