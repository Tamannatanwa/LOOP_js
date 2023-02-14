let a=require("readline-sync");
a=a.questionInt("enter the number");
while (a>=7){
    var sum=0;
    while (a>0){
        r=a%10
        sum+=r**2
        a=parseInt(a/10)
    }
    a=sum
}
if (sum==1){
    console.log(sum,"happy number")
}
else{
    console.log(sum,"unhappy number")
}

