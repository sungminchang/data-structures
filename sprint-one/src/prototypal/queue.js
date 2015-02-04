var Queue = function() {
  var newObject = Object.create(queueMethods);
  newObject.head = 0;
  newObject.tail = 0;
  return newObject;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this[this.tail++] = val;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var result = this[this.head];
    delete this[this.head++];
    return result;
  }
};

queueMethods.size = function() {
  return this.tail - this.head;
};

