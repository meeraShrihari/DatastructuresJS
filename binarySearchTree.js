function BST (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  BST.prototype.insert = function(value){
    if(value <= this.value){
      if(!this.left) this.left = new BST(value);
      else this.left.insert(value);
    }else {
      if(!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }
  
  BST.prototype.contains = function(value) {
    if(this.value === value) return true;
    else if(value < this.value){
      if(!this.left) return false;
      else return this.left.contains(value);
    }else if(value > this.value) {
      if(!this.right) return false;
      else return this.right.contains(value);
    }
  }
  
  /*BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
    if(order === 'pre-order') iteratorFunc(this.value);
    if(this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  }*/
  
  BST.prototype.depthFirstTraversal = function(order){
    if(order === 'pre-order') console.log(this.value);
    if(this.left) this.left.depthFirstTraversal(order);
    if (order === 'in-order') console.log(this.value);
    if(this.right) this.right.depthFirstTraversal(order);
    if(order === 'post-order') console.log(this.value);
  }
  
  BST.prototype.breadthFirstTraversal = function(iteratorFuncForBreadth){
    var queue = [this];
    while(queue.length){
      var treeNode = queue.shift();
      iteratorFuncForBreadth(treeNode);
      if(treeNode.left) queue.push(treeNode.left);
      if(treeNode.right) queue.push(treeNode.right);
    }
  }
  
  BST.prototype.getMinVal = function(){
    if(!this.left) return this.value;
    return this.left.getMinVal();
  }
  
  BST.prototype.getMaxVal = function(){
    if(!this.right) return this.value;
    return this.right.getMaxVal();
  }
  
  var bst = new BST(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(100);
  bst.insert(60);
  bst.insert(59);
  bst.insert(20);
  bst.insert(45);
  bst.insert(35);
  bst.insert(85);
  bst.insert(105);
  bst.insert(10);
  if(bst.contains(10)) console.log('Contains');
  else console.log('Does not contain');
  
  console.log(bst.right.right);
  
  console.log('Depth first traversal :')
  bst.depthFirstTraversal('pre-order');
  
  console.log('Breadth first traversal :')
  bst.breadthFirstTraversal(iteratorFuncForBreadth);
  
  console.log(`Min value : ${bst.getMinVal()}`);
  console.log(`Max value : ${bst.getMaxVal()}`);
  
  function iteratorFunc(value){
    console.log(value);
  }
  
  function iteratorFuncForBreadth(node){
    console.log(node.value);
  }
  