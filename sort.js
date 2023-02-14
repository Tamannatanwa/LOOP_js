let n=require("readline-sync");
n=n.questionInt("enter the number:-")
let m=require("readline-sync");
m=m.questionInt("enter the number:-")
let k=require("readline-sync");
k=k.questionInt("enter the number:-")
if (n>m && n>k){
    if (m>k){
        console.log(n,m,k)
    }
    else{
        console.log(n,k,m)
    }
}
else if (m>n && m>k){
    if (n>k){
        console.log(m,n,k)
    }
    else{
        console.log(m,k,n)
    }
}
else{
    if (n>m){
        console.log(k,n,m)
    }
    else{
        console.log(k,m,n)
    }
}