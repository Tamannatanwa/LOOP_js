var a = 2154;
var b = 458;  
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
	console.log(a)
}
gcd = a;
console.log(gcd);