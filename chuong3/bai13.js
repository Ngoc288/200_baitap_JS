var n=nhap(10);
function nhap(n)
{
    return n;
}
function snt(n)
{
    for(var i=2;i<=n;i++)
    {
        var kt=0;
        for(var j=2;j<=Math.sqrt(i);j++)
        {
            if(i%j==0)
            {
                kt=1;
                break;
            }
        }
        if(kt==0)
            console.log(+i);
    }
}
console.log(snt(n));