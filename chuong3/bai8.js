var n=nhap(5);
function nhap(n)
{
    return n;
}
function tinh(n)
{
    var s=0;
    for(var i=1;i<=n;i++)
        s=s+1/i;
    return s;
}
console.log(tinh(n));