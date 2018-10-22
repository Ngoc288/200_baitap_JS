var a=[4,7,1,9,3,2,0,19];
function xuat(k)
{
    for(var i=0;i<k.length;i++)
        console.log(k[i]);
}
function indao(k)
{
    for (var i = 0; i < k.length / 2; i++) {
        var tmp = k[i];
        k[i] = a[k.length- i - 1];
        k[k.length - i - 1] = tmp;
    }
}
indao(a);
xuat(a);