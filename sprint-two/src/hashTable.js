var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// to do: insert() should check if the key already exists
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (Array.isArray(bucket)) {
    bucket.push([k, v]);
  } else {
    var temp = [];
    var tuple = [k,v];
    temp.push(tuple);
    this._storage.set(i, temp);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = null;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
