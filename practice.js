let a=require("readline-sync");
a=a.questionInt("enter the number:-");
let b=require("readline-sync");
b=b.questionInt("enter the number:-");
while (a<=b){
    if (a%2==0){
        console.log(a)
    }
    a+=1
}
