var calculatePrime = function(num) {

  var collectMultiples = function(num) {
    var lowerInt = [];
    var total = num;
    for (i = 0; i < num; i++) {
      total = total - 1;
      if (total != 1) {
        lowerInt.push(total);
      }
    }
    var multiples = [];
    for (i = lowerInt.length - 1; i > 0; i--) {
      if (num % lowerInt[i] === 0) {
        multiples.push(lowerInt[i]);
      }
    }
    return multiples;
  };
  multiples = collectMultiples(num);

  var checkIfPrime = function(num, multiples) {
    if (multiples.length === 0) {
      return num;
    } else {
      console.log("num: " + num + ", multiples: " + multiples.length);
      num += 1;
      multiples = collectMultiples(num);
      console.log("num: " + num + ", multiples: " + multiples.length);
      if (multiples.length === 0) {
        return num;
      } else {
        checkIfPrime(num, multiples);
      }
    }
  };

  return checkIfPrime(num, multiples);
};
