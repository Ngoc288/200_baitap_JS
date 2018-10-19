var n=nhap(10);
function nhap(n)
{
    return n;
}
function uoc(n)
{
    for(var i=1;i<=n;i++)
        {
            if(n%i==0)
                console.log(i);
        }
}
console.log(uoc(n));