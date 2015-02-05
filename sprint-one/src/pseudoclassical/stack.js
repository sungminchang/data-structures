var Stack = function() {
  this.length = 0;
};

Stack.prototype.push = function(val) {
  this[this.length++] = val;
};

Stack.prototype.pop = function() {
  if (this.length > 0) {
    var result = this[--this.length];
    delete this[this.length];
    return result;
  }
};

Stack.prototype.size = function() {
  return this.length;
};

// var newObject = new Stack();
