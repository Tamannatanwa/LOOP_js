let b=' '
for (let i=1;i<=9;i++){
    for (let j=1;j<=9;j++){
        // if (i==1 || i==9 || j==1 || j==9 && i==9){
        //     b+="*";
        //     b+=" "
        // }
        if (i==1 || i==j){
            b+="*";
            b+=" "
        }
        // if (j==i){
        //     b+="*"
        //     b+=" "
        // }
    }
    console.log(b)
    b=" "
}