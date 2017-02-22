function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(value) {
  this.stack.push(value);
};
Stack.prototype.pop = function() {
  return this.stack.pop();
};
Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};
Stack.prototype.length = function() {
  return this.stack.length;
};
Stack.prototype.print = function() {
  console.log(this.stack.join(' '));
};

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // => 1 2 3
console.log('length is 3:', stack.length()); // => 3
console.log('peek is 3:', stack.peek()); // => 3
console.log('pop is 3:', stack.pop()); // => 3
stack.print(); // => 1 2
console.log('pop is 2:', stack.pop());  // => 2
console.log('length is 1:', stack.length()); // => 1
console.log('pop is 1:', stack.pop()); // => 1
stack.print(); // => ''
console.log('peek is undefined:', stack.peek()); // => undefined
console.log('pop is undefined:', stack.pop()); // => undefined


// Stack created from linked objects

function Stack(size) {
  this.nodes = {};
  this.nodesLeft = size;
  this.size = size;
}

Stack.prototype.push = function(id) {
  if (this.nodesLeft === 0) {
    return console.log("this stack is already at capacity");
  } else {
    var order = this.nodesLeft;
    if(!this.nodes.hasOwnProperty(order)) {
      this.nodes[order] = {};
    }
    var name = "name";
    if(!this.nodes[order].hasOwnProperty(name)) {
      this.nodes[order][name] = id;
    }
    var next = "next";
    if (!this.nodes[order].hasOwnProperty(next) && order > 1) {
      this.nodes[order][next] = order - 1;
    }
    var top = "top";
    if(this.nodes.hasOwnProperty(order+1) && this.nodes[order+1].hasOwnProperty(top)) {
      this.nodes[order+1][top] = false;
    }
    if(!this.nodes[order].hasOwnProperty(top)) {
      this.nodes[order][top] = true;
    }
    this.nodesLeft--;
    return this.nodes[order];
  }
};

Stack.prototype.pop = function() {
  if (this.nodesLeft === this.size) {
    return console.log("this stack is empty");
  } else {
    if (this.nodes[this.nodesLeft + 1][top] == true) {
      delete this.nodes[this.nodesLeft + 1];
    }
    this.nodes[this.nodesLeft][top] == true;
    this.nodesLeft++;
    return this.nodes
  }
};
