var Stack = function() {
  var newObject = Object.create(stackMethods);
  newObject.len = 0;

  return newObject;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this[this.len++] = val;
};

stackMethods.pop = function() {
  if (this.len > 0) {
    var result = this[--this.len];
    delete this[this.len];
    return result;
  }
};

stackMethods.size = function() {
  return this.len;
};
