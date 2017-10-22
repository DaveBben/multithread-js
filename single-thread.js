
function isPrime(n) {
  if (n > 1) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  return false;
}

(function () {
  for (let i = 1; i < 600000; i += 1) {
    if (isPrime(i)) {
      postMessage(i);
    }
  }

}());
