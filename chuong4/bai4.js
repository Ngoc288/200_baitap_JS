var n=6;
var a=[];
function nhapmang(a)
{
    for(var i=0;i<n;i++)
        a.push(i+1);
}
function tongchan(a)
{
    var tc=0;
    for(var i=0;i<n;i++)
    {
       if(a[i]%2==0)
        {
            tc+=a[i];
        }
    }
    console.log(tc);
    return tc;
}
function tongle(a)
{
    var tl=0;
    for(var i=0;i<n;i++)
    {
        if(a[i]%2!=0)
            tl+=a[i];
    }
    console.log(tl);
   return tl;
}
nhapmang(a);
console.log('tổng chẵn=');
tongchan(a);
console.log('tổng lẻ=');
tongle(a);