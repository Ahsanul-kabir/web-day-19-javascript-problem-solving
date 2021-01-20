function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime number';
        } else {
            return 'Is a prime number';
        }
    }
}

var result = isPrime(4);
console.log(result);