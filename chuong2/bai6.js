var n=5;
var i=1;
var S=0;
var F=1;
if(n%2==0)
{
    for(i=1;i<=n;i++)
    {
        S=S+1/i;
    }
    console.log('F='+S);
}
else
{
    F=Math.sqrt(n-1);
    console.log('F='+F);
}