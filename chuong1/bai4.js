var a=2;
var b=5;
var c=3;
if(a==0)
{
    console.log('Không phải phương trình bậc 2');
}
else
{
    var dt=b*b-4*a*c;
    var x1=(-b-Math.sqrt(dt))/2/a,
        x2=(-b+Math.sqrt(dt))/2/a,
        x=-b/2/a;
    if(dt<0)
        console.log('Phương trình không có nghiệm');
    else if(dt==0)
        console.log('Phương trình có nghiệm kép x='+x);
    else   
        console.log('Phương trình có hai nghiệm phân biệt x1='+x1+'; x2= '+x2);
}