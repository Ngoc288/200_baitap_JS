var n=nhap(5);
function nhap(n)
{
    return n;
}
function tinhF(n)
{
    var F;
    if(n%2==0)
    {
        for(var i=1;i<=n;i++)
            F=F+1/i;
    }
    else
        F=Math.sqrt(n-1);
    return F;
}
console.log(tinhF(n));