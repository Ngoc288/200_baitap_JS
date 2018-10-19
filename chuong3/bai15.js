var n=nhap(12);
function nhap(n)
{
    return n;
}
function phantich(n)
{
    var i=2;
    while(n!=1)
    {
        if(n%i==0)
        {
            console.log(i);
            n=n/i;
        }
        else 
            i++;
    }
}
console.log(phantich(n));