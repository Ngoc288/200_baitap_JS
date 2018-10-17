var n=10;
var i=1,j=1;
console.log('SNT là: ');
for(i=1;i<=n;i++)
{
    var kt=0;
    if(i<2) kt=0;
    else
    {
        for(j=1;j<=i;j++)
        {
            if(i%j==0)
            {  
                kt++;
            }
        }
        if(kt==2)
            console.log(+i);
            kt=0;
    } 
}