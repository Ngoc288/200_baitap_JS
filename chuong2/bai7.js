var n=10;
var i=1;
var Tc=0,Tl=0;
for(i=1;i<=n;i++)
{
    if(i%2==0)
    {
        Tc=Tc+i;
    }
    else
    {
        Tl=Tl+i; 
    }
}
console.log('Tổng các số chẳn từ 1 đến n='+Tc);
console.log('Tổng các số lẻ từ 1 đến n='+Tl);