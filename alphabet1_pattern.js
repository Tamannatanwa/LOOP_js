let i=1;
let b=" "
while (i<=5){
    let j=1;
    let a=65;
    while (j<=i){
        c=String.fromCharCode(a)
        b+=c
        b+=" "
        j++
        a++
    }
    console.log(b)
    b=" "
    i++
    a++
}