let str=require("readline-sync");
str=str.question("enter the number:-");
let i=0;
let b='';
while (i<str.length){
    let j=0;
    while (j<str.length-i){
        b+="  ";
        j++
    }
    let k=0;
    while (k<=i){
        b+=str[k]
        b+=" "
        k++
    }
    console.log(b)
    b=""
    i++
}