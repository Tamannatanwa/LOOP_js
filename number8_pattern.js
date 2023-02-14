let i=5;
let n=' ';
while (i>0){
    let j=5;
    while (j>=i){
        n+=j;
        n+=' ';
        j--
    }
    console.log(n);
    n=' ';
    i--
}