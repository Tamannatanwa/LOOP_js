let a=require("readline-sync");
a=a.questionInt("enter the input");
let sum=0;
let place=1;
while (a>0){
    r=a%2
    sum=sum+r*place
    place=place*10
    a=parseInt(a/2);
}
console.log(sum)

