function fact(n) {
    var i = n;
    while (i >= 1) {
        var fact = (i - 1) * i;
        i--;
    }
    return fact;
}

var result = fact(5);
console.log(result);