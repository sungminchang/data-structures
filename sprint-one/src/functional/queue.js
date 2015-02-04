var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var tail = 0;
  var head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail++] = value;
  };

  someInstance.dequeue = function(){
    var result = storage[head];
    delete storage[head];
    (tail - head) && head++;

    return result;
  };

  someInstance.size = function(){
    return tail - head;
  };

  return someInstance;
};
