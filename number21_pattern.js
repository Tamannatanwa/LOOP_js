let i=1;
let b=' ';
while (i<=5){
    let j=1;
    while (j<=5-i){
        b+=" "
        j++
    }
    let k=1;
    while (k<=i){
        b+="*"
        b+=" "
        k++
    }
    console.log(b)
    b=" "
    i++
}