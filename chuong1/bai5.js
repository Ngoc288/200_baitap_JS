var x=130;
var T;
console.log('Tien dien phai tra la:');
if(x<50)
{
    T=50*1000;
    console.log(T);
}
else if(x<100)
{
    T=50*1000+(x-50)*1500;
    console.log(T);
}
else if(x>=100)
{
    T=50*1000+50*1500+(x-100)*2000;
    console.log(T);
}