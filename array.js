// Functions for Arrays

// add:
Array.prototype.add = function(data) {
  this.push(data);
};

// remove:
Array.prototype.remove = function(data) {
  this = this.filter(function(current) {
    return current !== data;
  });
};

// insert:
Array.prototype.insertAt = function(index, element) {
  if (index >= this.length) {
       this.add(element);
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

// search:
Array.prototype.search = function(data) {
  var foundIndex = this.indexOf(data);
  if(~foundIndex) {
    return foundIndex;
  }

  return null;
};

// return index
Array.prototype.getAtIndex = function(index) {
  return this[index];
};

// return length
Array.prototype.length = function() {
  return this.length;
};

// print
Array.prototype.print = function() {
  console.log(this.join(' '));
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
