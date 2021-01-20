/* General Way
var i = 1,
    num = 5,
    fact = 1;

while (i <= num) {
    fact = fact * i;
    i++;
}
console.log(fact); */

function fact(n) {
    var i = 1,
        fact = 1;

    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
}

var result = fact(5);
console.log(result);