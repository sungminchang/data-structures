var Queue = function() {
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(val) {
  this[this.tail++] = val;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    var result = this[this.head];
    delete this[this.head++];
    return result;
  }
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};


