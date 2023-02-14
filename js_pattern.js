let a=require("readline-sync");
a=a.question("enter the name");
let c=require("readline-sync");
c=c.question("enter the name");
let b='';
let i=0;
while (i<a.length){
    let l=0;
    while (l<=i){
        b+="";
        l++
    }
    let j=0;
    while (j<a.length-i){
        b+=a[i]
        b+=" "
        j++
    }
    let k=0;
    while (k<=i){
        b+=c[i]
        b+=" "
        k++
    }
    console.log(b);
    b=""
    i++
}