let b='';
for (i=1;i<8;i++){
    for (j=1;j<6;j++){
        if (((j==1 || j==5) & i!=1 ) || ((i==1 || i==4 ) & j>1 & j<5)){
            b+="*"
            b+=" "
        }else{
            b+='  '
        }
    }
    console.log(b);
    b="";
}