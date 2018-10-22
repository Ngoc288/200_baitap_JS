var b=[2,5,4,6,1,9,10];
function inmang(a)
{
    for(var i=0;i<a.length;i++)
        console.log(a[i]);
}
function xoamang(a,vt)
{
    for(var i=vt;i<a.length;i++)
    {
        a[i-1]=a[i];
    }
    a.length--;
}
console.log('Xóa phần tử ở vị trí đầu:');
var vt=0;
xoamang(b,vt);
inmang(b);
console.log('Xóa phần tử ở vị trí cuối:');
var vt=b.length;
xoamang(b,vt);
inmang(b);
console.log('Xóa phần tử ở vị trí bất kỳ:');
var vt=2;
xoamang(b,vt);
inmang(b);

