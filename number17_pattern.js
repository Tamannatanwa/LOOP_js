let i=0;
let b=' ';
while (i<=5){
    let j=0;
    while (j<=i){
        d=j*j
        b+=d;
        b+=" "
        j++
    }
    console.log(b);
    b=' '
    i++
}