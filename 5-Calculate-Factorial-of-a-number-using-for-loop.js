/* general way
let num = 5;

let fact = 1;

for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log(fact); */

function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
let result = factorial(5);
console.log(result);