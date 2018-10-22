var x=nhap(5);
var a=[2,6,5,1,3,5,9,5];
function nhap(x)
{
    return x;
}
function dem(a,x)
{
    var dem=0;
    var s=0;
    console.log('x xuất hiện ở các vị trí:');
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==x)
        {
            console.log(i+1)
            dem++;
            s+=a[i];
        }
    }
    console.log('Số lần xuất hiện là:');
    console.log(dem);
    console.log('Tổng=');
    console.log(s);
}
function met(a,x)
{
    var gt=0;
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
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==x)
        {
            gt=i+1;
            break;
        }
    }
    console.log('Trong mảng, x là số nhỏ thứ:')
    console.log(gt);
}
dem(a,x);
met(a,x);