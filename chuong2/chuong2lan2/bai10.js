var n = 10;
var i = 2;
while (n != 1) {
    if (n % i == 0) {
        console.log(i);
        n = n / i;
    }
    else {
        i++;
    }
}