var n=10;
var a=[];
function nhapmang(a)
{
    for(var i=0;i<n;i++)
        a.push(i+1);
}
function tonguoc(a)
{
    var s=0;
    for(var i=0;i<n;i++)
    {
        if(n%a[i]==0)
          {
            console.log(a[i]);
            s+=a[i]
          }
    }
    console.log(s);
    return s;
}
nhapmang(a);
tonguoc(a);