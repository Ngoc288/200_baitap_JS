var b=[1,2,3,4,5,6,10,7,8,9];
function kiemtra(x){
    var kt=0;
    for(var i=2; i<=Math.sqrt(x); i++)
        if(x%i==0){
            kt=1;
            break;
        }
    return kt;
}
function insnt(a){
    for(var i=0; i<a.length ; i++){
        if(kiemtra(a[i])==0 && a[i]>1)
            console.log(a[i]);
    }
}
function tongsnt(a)
{
    var s=0;
    for(var i=0;i<a.length;i++)
        if(kiemtra(a[i])==0&& a[i]>1)
            s+=a[i];
    console.log(s);
    return s;
}
insnt(b);
console.log('Tổng snt=');
tongsnt(b);