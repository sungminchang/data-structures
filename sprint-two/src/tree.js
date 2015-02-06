var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var subTree = Tree(value);
  this.children.push(subTree);
};

treeMethods.contains = function(target){
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];

    if (child.value === target) {
      return true;
    } else {
      if (child.contains(target)) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild() = O(1)
 * contains() = O(n)
 */
