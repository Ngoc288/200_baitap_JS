var m=nhap(4);
var n=nhap(30);
function nhap(x)
{
    return x;
}
function insnt(m,n)
{
    for(var i=m;i<=n;i++)
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
        {
            console.log(i);
        }
    }
}
console.log(insnt(m,n));