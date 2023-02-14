// let a=require("readline-sync");
// a=a.questionInt("enter the number");
// let sum=0;
// let x=a;
// while (a>0){
//     let n=a%10
//     let pro=1
//     while (n>0){
//         pro*=n
//         n=n-1
//     }
//     sum+=pro
//     a=parseInt(a/10)
// }
// if (sum==x){
//     console.log(sum,"strong number")
// }
// else{
//     console.log(sum,"not strong number")
// }



let a=require("readline-sync");
a=a.questionInt("enter the number");
for (let a = 2; i<10; a++){
    let n=a%10
    let pro=1
    for (n>0;n-1;){
        pro*=n
    }
    sum+=pro
}
if (sum==x){
    console.log(sum,"strong number")
}
else{
    console.log(sum,"not strong number")
}



