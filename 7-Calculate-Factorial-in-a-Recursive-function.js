// function fact(n) {
//     var i = n;
//     while (i >= 1) {
//         var fact = (i - 1) * i;
//         i--;
//     }
//     return fact;
// }

// var result = fact(5);
// console.log(result);

function fact(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
var result = fact(5);
console.log(result);