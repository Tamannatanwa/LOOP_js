let i=1;
while (i<=100){
    let j=1;
    let count=0;
    while (j<=i){
        if (i%j==0){
            count+=1
        }
        j++
    }
    if (count==2){
        console.log(i,"prim");
    }
    i++
}