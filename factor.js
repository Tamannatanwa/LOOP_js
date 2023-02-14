let a=require("readline-sync");
a=a.questionInt("enter the number:-");
let count=0;
let i=0;
let str=""
while(i<=a){
    if (a%i==0){
        count+=1
        str+=i
        str+=" "
        console.log(i)
    }
    i++
}
console.log(count,str)