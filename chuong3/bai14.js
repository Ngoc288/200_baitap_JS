var n=nhap(10);
function nhap(n)
{
    return n;
}
function tongsnt(n)
{
    var s=0;
    for(var i=2;i<=n;i++)
    {
        kt=0;
        for(var j=2;j<=Math.sqrt(i);j++)
        {
            if(i%j==0)
            {
                kt=1;
                break;
            }
        }
        if(kt==0)
        {
            s=s+i;
        }

    }
    return s;
}
console.log(tongsnt(n));