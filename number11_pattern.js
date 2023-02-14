let i=1;
let b=' ';
while (i<=5){
    let j=1;
    while (j<=5-i){
        b+="  ";
        j++
    }
    let k=i;
    while (k>=1){
        b+=k;
        b+=" ";
        k--
    }
    console.log(b);
    b=' ';
    i++
}