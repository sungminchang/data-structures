

var Graph = function(){
  this.list = {};
};

var Vertex = function(val) {
  this.val = val;
  this.refs = {};
}

Graph.prototype.addNode = function(node){
  this.list[node] = new Vertex(node);
};

Graph.prototype.contains = function(node){
  return this.list.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this.list[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.list[fromNode].refs.hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.list[fromNode].refs[toNode] = this.list[toNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.list[fromNode].refs[toNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var k in this.list) {
    cb(this.list[k].val);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



