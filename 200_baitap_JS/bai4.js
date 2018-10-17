var n=10;
var i=1;
var S=0;
for(i=1;i<=n;i++)
{
    if(n%i==0)
        S=S+i;
}
console.log('Tổng các ước của n='+S);