var Stack = function() {
  var newObject = {};
  newObject.length = 0;

  _.extend(newObject, stackMethods);
  return newObject;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this[this.length++] = val;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    var result = this[--this.length];
    delete this[this.length];
    return result;
  }
};

stackMethods.size = function() {
  return this.length;
};
