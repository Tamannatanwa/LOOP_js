let i=1;
let sum=0;
while (i<=10){
    let n=require("readline-sync");
    n=n.questionInt("enter the number");
    sum+=n;
    i++
}
let ave=sum/i
console.log(ave)