let i=0;
let k=0;
let b=' ';
while (i<=5){
    let j=0;
    while (j<=i){
        d=j*k
        b+=d;
        b+=" "
        j++
    }
    console.log(b);
    b=' '
    i++
    k++
}