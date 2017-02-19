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
