var a=[3,2,7,9,5,1,0,10,11];
var c=[],l=[];
function xuat(k)
{
    for(var i=0;i<k.length;i++)
        console.log(k[i]);
}
function tach(k)
{
    for(var i=0;i<k.length;i++)
        {
            if(k[i]%2==0)
            {
                c.push(a[i]);
            }
            else
            {
                l.push(a[i]);
            }
        }
}
tach(a);
console.log('Mảng chẵn:');
xuat(c);
console.log('Mảng lẻ:');
xuat(l);