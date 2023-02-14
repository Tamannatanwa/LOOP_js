let a=require("readline-sync");
a=a.questionInt("enter the number");
let b=require("readline-sync");
b=b.questionInt("enter the number");
let sum=0;
while (a<=b){
    if (a%2==0){
        sum=sum+a
    }
    a++
}
console.log(sum)