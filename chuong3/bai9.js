var n=nhap(10);
function nhap(n)
{
    return n;
}
function tong(n)
{
    var s=0;
    for(var i=1;i<=n;i++)
    {
        if(n%i==0)
            s=s+i;
    }
    return s;
}
console.log(tong(n));