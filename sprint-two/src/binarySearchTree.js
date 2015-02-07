var BinarySearchTree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  var newTree = new BinarySearchTree(val);

  if (val >= this.value) {
    if (this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(val);
    }
  } else {
    if (this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(val) {
  if (this.value === val) {
    return true;
  }
  if (val > this.value) {
    return !!this.right && this.right.contains(val);
  }
  if (val < this.value) {
    return !!this.left && this.left.contains(val);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  !!this.left && this.left.depthFirstLog(cb);
  !!this.right && this.right.depthFirstLog(cb);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
