
var b=[1,5,7,3,2];
function sapxepgiam(a)
{
    for(var i=0;i<a.length-1;i++)
    {
        for(var j=i+1;j<a.length;j++)
        {
            if(a[i]<a[j])
            {
                var tmp=a[i];
                a[i]=a[j];
                a[j]=tmp;
            }
        }
    }
}

function xuat(a)
{
    for(var i=0;i<a.length;i++)
        console.log(a[i]);
}
function sapxeptang(a)
{
    for(var i=0;i<a.length-1;i++)
    {
        for(var j=i+1;j<a.length;j++)
        {
            if(a[i]>a[j])
            {
                var tmp=a[i];
                a[i]=a[j];
                a[j]=tmp;
            }
        }
    }
}
console.log('Mảng được sắp xếp theo chiều giảm dần là:');
sapxepgiam(b);
xuat(b);
console.log('Mảng được sắp xếp theo chiều tăng dần là:');
sapxeptang(b);
xuat(b);