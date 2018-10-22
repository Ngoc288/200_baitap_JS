var a=[8,9,4,2,11,20,5,3,6,7,30];
var max2,min2;
function xuat(k)
{
    for(var i=0;i<k.length;i++)
        console.log(k[i]);
}
function lt2(k,max2)
{
    for(var i=0;i<k.length-1;i++)
    {
        for(var j=i+1;j<k.length;j++)
        {
            if(k[i]>k[j])
            {
                var tmp=k[i];
                k[i]=k[j];
                k[j]=tmp;
            }
        }
    }
    for(var i=a.length-1;i>=0;i--)
    {
        if(k[i]!=max1)
        {
            max2=k[i];
            break;
        }
    }
    return max2;   
}
function nt2(k,min2)
{
    for(var i=0;i<k.length-1;i++)
    {
        for(var j=i+1;j<k.length;j++)
        {
            if(k[i]>k[j])
            {
                var tmp=k[i];
                k[i]=k[j];
                k[j]=tmp;
            }
        }
    }
    for(var i=0;i<k.length;i++)
    {
        if(k[i]!=min1)
        {
            min2=k[i];
            break;
        }
    }
    return min2;
}

function max(k)
{
    return Math.max.apply(null,a);
}
function min(k)
{
    return Math.min.apply(null, a);
}

max1=max(a);
min1=min(a);
max22=lt2(a);
min22=nt2(a);
console.log('Số lớn nhất là:');
console.log(max1);
console.log('Số bé nhất là:');
console.log(min1);
console.log('Số lớn thứ 2 là:');
console.log(max22);
console.log('Số bé thứ 2 là:');
console.log(min22);