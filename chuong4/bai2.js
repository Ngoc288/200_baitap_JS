var n=nhap(5);
var a=[];
function nhap(n)
{
    return n;
}
function nhapmang(a)
{
    for(var i=0;i<n;i++)
        a.push(i+1);
}
function xuattong(a)
{
    var s=0;
    for(var i=0;i<n;i++)
        {
            s+=a[i];
        }
    console.log(s);
    return s;
}
nhapmang(a);
xuattong(a);