var n=nhap(3);
var x=tinhgiaithua(n);
function nhap(n)
{
    return n;
}
function tinhgiaithua(n)
{
    var i=1, T=1;
    for(i=1;i<=n;i++)
        T=T*i;
    return T; 
}
function xuat(x)
{
    console.log(x);
}
xuat(x);