function factorial(num) {
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
 console.log (factorial(10));
