var b=[5,2,8,6,3,1];
function inmang(a)
{
    for(var i=0;i<a.length;i++)
        console.log(a[i]);
}

function chen(a, vt, gt){
    for(var i= a.length; i>vt ; i --){
        a[i]=a[i-1];
    }
    a[vt]=gt;
}
console.log('Chèn một giá trị vào đầu mảng:');
var vt=0;
var gt=10;
chen(b,vt,gt);
inmang(b);
console.log('Chèn một giá trị vào cuối mảng:');
var vt=b.length;
var gt=4;
chen(b,vt,gt);
inmang(b);
console.log('Chèn một giá trị vào vị trí bất kỳ:')
var vt=5;
var gt=16;
chen(b,vt,gt);
inmang(b);
