"use strict";

function isPrime(n) {
  if (n ===2 || n === 3) {
    return true;
  }

  var root = (Math.sqrt(n));
  //document.write(root)
  if (n%2 === 0 || n%3 === 0) {
    //document.write("inside if");
    return false;
  }

  var i = 5;
  while ( i <= root) {
    if (n%i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
}

document.write(isPrime(50));
