var m=4,n=20;
var i=2,j=2;
for(i=m;i<=n;i++)
{
    var kt=0;
    if(m<2) kt=0;
    else
    {
        for(j=2;j<=Math.sqrt(i);j++)
        {
            if(i%j==0)
            {
                kt=1;
                break;
            }
        }
        if(kt==0)
            console.log(i);
    }
}