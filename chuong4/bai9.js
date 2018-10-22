var a=[4,2,8,5];
var b=[3,7,9];
var c=[];
function inmang(k)
{
    for(i=0;i<k.length;i++)
        console.log(k[i]);
}
function ghep(k)
{
    for(var i=0;i<a.length;i++)
    {
        c.push(a[i]);
    } 
    for(var i=0;i<b.length;i++)
    {
        c.push(b[i]);
    } 
}
function sapxepc(k)
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
}
function cat(i,vt)
{
    var k=c.slice(i,vt);
    return k;
}
console.log('Mảng sau khi được ghép là:');
ghep(c);
inmang(c);
console.log('Mảng c sau khi sắp xếp là:');
sapxepc(c);
inmang(c);
console.log('Mảng a sau khi sắp xếp là:');
a=cat(0,a.length);
inmang(a);
console.log('Mảng b sau khi sắp xếp là:');
b=cat(a.length,c.length)
inmang(b);