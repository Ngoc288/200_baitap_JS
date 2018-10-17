var n=17;
var i=2,j=2;
for(i=(n-1);i>=2;i--)
{
    var kt=0;
    for(j=2;j<=Math.sqrt(i);j++)
    {
        if(i%j==0)
        {
            kt=1;
            break;
        }
    }
    if(kt==0)
    {
        console.log(i);
        break;
    }
}
