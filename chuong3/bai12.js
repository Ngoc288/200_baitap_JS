var n=nhap(10);
function nhap(n)
{
    return n;
}
function tongchan(n)
{
    var Tc=0;
    for(var i=1;i<=n;i++)
    {
        if(i%2==0)
            Tc+=i;
    }
    return Tc;
}
function tongle(n)
{
    var Tl=0;
    for(var i=1;i<=n;i++)
    {
        if(i%2!=0)
            Tl+=i;
    }
    return Tl;
}
console.log('Tổng chẵn=');
console.log(tongchan(n));
console.log('Tổng lẻ=');
console.log(+tongle(n));