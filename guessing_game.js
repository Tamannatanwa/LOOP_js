let atempt=5;
let guess_n=5;
let i=1;
while (i<=atempt){
    let user=require("readline-sync");
    user=user.questionInt("enter the number:-")
    if (user>guess_n){
        console.log("high guessing",user)
    }
    else if (user<guess_n){
        console.log("low guessing",user)
    }
    else if (user==guess_n){
        console.log("**congratulation**")
        console.log("***you are won***",user)
        break
    }
    i++
}