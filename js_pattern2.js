let str=require("readline-sync");
str=str.question("enter the name:-");
let b="";
let i=0;
while (i<str.length){
     let j=0;
     while (j<str.length-i){
          b+="  ";
          j++
     }
     let k=i;
     while (k>=0){
          b+=str[k];
          b+=" ";
          k--
     }
     console.log(b)
     b='';
     i++
}