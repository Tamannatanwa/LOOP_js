let a=65;
let i=1;
let b=" "
while (i<=5){
    let j=1;
    while (j<=i){
        c=String.fromCharCode(a)
        b+=c
        b+=" "
        j++
    }
    console.log(b)
    b=" "
    i++
    a++
}