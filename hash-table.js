// Use the below with something like: .var hashtable = new HashTable(3);
function HashTable(size) {
  this.values = {};
  this.numberOfValues = 0;
  this.size = size;
}

// The 'calculateHash' function attempts to create a random number from the remainder of dividing the number of letters in the key by the size of the hash table.  This random number is then used in the function below.
HashTable.prototype.calculateHash = function(key) {
  return key.toString().length % this.size;
};

HashTable.prototype.calculateHashCode = function(key) {
  var abc = "0abcdefghijklmnopqrstuvwxyz"
  var alphaToNumeric = function(index) {
    alpha = key.charAt(index);
    numeric = abc.indexOf(alpha);
    return numeric;
  }
  var hash = 0;
  for (i = 0; i < key.length; ++i) {
    hash = 31 * hash + alphaToNumeric(i);
  }

  var calculatePrime = function() {
    var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,47,53,59,61,67,71,73,79,83,89,97,101];
    for (i = 0; i < primes.length; ++i) {
      if (this.size == primes[i]) {
        return primes[i];
      } else if (this.size == (primes[i] - 1)) {
        return primes[i];
      } else if (this.size == (primes[i] - 2)) {
        return primes[i];
      } else if (this.size == (primes[i] - 3)) {
        return primes[i];
      } else if (this.size == (primes[i] - 4)) {
        return primes[i];
      } else if (this.size == (primes[i] - 5)) {
        return primes[i];
      } else if (this.size == (primes[i] - 6)) {
        return primes[i];
      } else if (this.size == (primes[i] - 7)) {
        return primes[i];
      } else if (this.size == (primes[i] - 8)) {
        return primes[i];
      }
    }
  };

  return (hash % calculatePrime());
};

// The 'add' function checks to see if 'this.value' -- itself an object -- has 'hash' as a property: this.value[hash].  If it does not, then 'hash' is added as a property with an empty object set as its associated value: this.value[hash] = {}.  Then 'add' checks to see if an existing hash value object (this.value[hash]: {}) has the property 'key'.  If it does not, then 'add' increments a counter by one, the property 'this.numberOfValues'.  Ultimately 'add', sets the value of 'key' with 'value' ()
HashTable.prototype.add = function(key, value) {
  var hash = this.calculateHash(key);
  if(!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {};
  }
  if(!this.values[hash].hasOwnProperty(key)) {
    this.numberOfValues++;
  }
  this.values[hash][key] = value;
};

HashTable.prototype.remove = function(key) {
  var hash = this.calculateHash(key);
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    delete this.values[hash][key];
    this.numberOfValues--;
  }
};

HashTable.prototype.search = function(key) {
  var hash = this.calculateHash(key);
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key];
  } else {
    return null;
  }
};
HashTable.prototype.length = function() {
  return this.numberOfValues;
};
HashTable.prototype.print = function() {
  var string = '';
  for(var value in this.values) {
    for(var key in this.values[value]) {
      string += this.values[value][key] + ' ';
    }
  }
  console.log(string.trim());
};


var hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
hashTable.print(); // => 2 4 1 3 5
console.log('length gives 5:', hashTable.length()); // => 5
console.log('search second gives 2:', hashTable.search('second')); // => 2
hashTable.remove('fourth');
hashTable.remove('first');
hashTable.print(); // => 2 3 5
console.log('length gives 3:', hashTable.length()); // => 3
