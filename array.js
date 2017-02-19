// Functions for Arrays

// insert:
Array.prototype.insertAt = function(index, element) {
  if (index >= this.length) {
       return console.log("Dude, if you're going to insert an element in the last position, then just push or add it...duh...");
     }
  last = this.length - 1;
  this.push(this[last]);
  for (i = last; i > index - 1; i--) {
    if (i == index) {
      this[index] = element;
    } else {
      this[i] = this[i - 1];
    }
  }
  return this;
};

// Function to get Fibonacci sequence:

var getFib = function(digit) {
  if (digit < 3) {
    return digit;
  } else {
    var seq = [1, 2];
    var num = digit - 2;

    for (var i = 0; i < num; i++ ) {
        var lastNum = seq[seq.length -2] + seq[seq.length - 1];
        seq.push(lastNum);
    }
    return {
      lastNum: lastNum,
      seq: seq
    };
  }
};
