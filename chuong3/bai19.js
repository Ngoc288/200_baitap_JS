var n=nhap(30);
var i=1;
function nhap(n)
{
    return n;
}
function lonnhat(n)
{
    for(i=(n-1);i>=1;i--)
    {
        if(n>i*i)
            {
                console.log(i);
                break;
            }
    }
}
console.log(lonnhat(n));