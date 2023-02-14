let max=0;
let min=1000;
let  i=1;
while (i<=10){
    let r=require("readline-sync");
    r=r.questionFloat("enter the number")
    if (max<r){
        max=r
    }
    if (r<min){
        min=r
    }
    i++
}
console.log(max+"maximum number")
console.log(min+"minimum")