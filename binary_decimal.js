// let a=require("readline-sync");
// a=a.question("enter the number")
// let i=1;
// let sum=0;
// while (i<=a.length){
//     r=a.length-i
//     sum+=a[i]*2**r
//     i++
// }
// console.log(sum)


let a=require("readline-sync");
a=a.question("enter the number")
let i=0;
let sum=0;
while (i<a.length){
    r=a.length-i
    sum+=parseInt(a[i])*2**r
    i++
}
console.log(sum)