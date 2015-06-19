function primeFactors(n) {
  if (n === 1) {
    return [1];
  }

  var divisor = 2, q = 0, r= 0;
  var factors = [];
  var half = n/2;

  while (divisor <= half) {
    if (n % divisor === 0) {
      if (isPrime(divisor)) {
        factors.push(divisor);
      }
      n /= divisor;
    }
    else {
      divisor++;
    }
  }
  return factors;
}
