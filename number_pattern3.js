let i=5;
let b=' ';
while (i>0){
    let j=1;
    while (j<=i){
        b+=i;
        b+=' ';
        j++
    }
    console.log(b);
    b=''
    i--
}