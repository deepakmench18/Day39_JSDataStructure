var n = 425;
var arr = [];
for (i = 2; i < n/2; i++) {
  if (n % i == 0) {

    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }
    if (isPrime == true) {
      n /= i
      arr.push(i);
    }
  }
}
for (var k = 0; k < arr.length; k++) {
  console.log(arr[k]);
}