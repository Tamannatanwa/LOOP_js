let i=1;
let sum=0;
let sub=0;
while (i<=10){
    let n=require("readline-sync");
    n=n.questionInt("enter the number:-")
    if (n%2==0){
        sum+=n
    }
    else{
        sub+=n
    }
    i++
}
console.log(sum-sub)