// let a,b,c;
// a=require("readline-sync");
// a=a.questionInt("enter the number")
// b=require("readline-sync");
// b=b.questionInt("enter the number")
// c=require("readline-sync");
// c=c.questionInt("enter the number")
// if (a>0 && b>0 && c>0){
//     console.log("the sign is +")
// }
// else if (a<0 && b<0 && c<0){
//     console.log("the sign is -")
// }
// else if (a>0 && b<0 && c<0){
//     console.log("the sign is -")
// }

var x=4;
var y=7;
var z=-2;
if (x>0 && y>0 && z>0)
{
       console.log("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }