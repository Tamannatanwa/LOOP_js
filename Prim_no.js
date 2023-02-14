let a=require("readline-sync");
a=a.questionInt("enter the number:-");
let count=0;
let i=1;
while (i<=a){
    if (a%i==0){
        count+=1
    }
    i++
}
if (count==2){
    console.log(a+" prim number")
}
else{
    console.log(a+" not prim number")
}