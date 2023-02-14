var a=1;
var sum=0;
while (a<=5){
    var fac=1;
    var b=a
    while (b>0){
        fac=fac*b;
        b=b-1
    }
    console.log(fac)
    sum=sum+fac;
    a++
}
console.log(sum);