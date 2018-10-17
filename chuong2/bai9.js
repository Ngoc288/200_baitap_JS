var n=10;
var i=1,j=1;
var S=0;
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
           { 
               console.log(+i);
               S=S+i;
           }
        kt=0;
    } 
}
console.log('Tổng SNT là: '+S);