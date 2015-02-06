var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);
    if (list.head === null) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function(){
    var result = list.head;
    list.head = list.head.next;
    return result.value;
  };

  list.contains = function(target, node){
    node = node || list.head;

    if (node.value === target) {
      return true;
    } else {
      if (node.next === null) {
        return false;
      } else {
        return list.contains(target, node.next);
      }
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail() = O(1)
 * removeHead() = O(1)
 * contains() = O(n)
 */
