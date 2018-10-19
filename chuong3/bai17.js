var n=nhap(30);
var i=2;
var dem=0;
function nhap(n)
{
    return n;
}
function sntlt2(n)
{
    for(i=(n-1);i=>2;i--)
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
            dem++;
            if(dem==2)
            {
                console.log(i);
                break;
            }
        }
    }
}
console.log(sntlt2(n));