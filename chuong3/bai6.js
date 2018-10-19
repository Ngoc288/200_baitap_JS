var n=nhap(5);
function nhap(n)
{
    return n;
}
function tong(n)
{
    var s=0;
    for(var i=1;i<=n;i++)
    {
        s=s+i;
    }
    return s;
}
console.log(tong(n));