let a=require("readline-sync");
a=a.question("enter the name");
let b='';
let i=0;
while (i<a.length){
    let j=0;
    while (j<=i){
        b+=a[j]
        b+=" "
        j++
    }
    console.log(b);
    b=""
    i++
}