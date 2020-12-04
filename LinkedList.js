function LinkedList(){
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  };
  
  LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  };
  
  LinkedList.prototype.removeHead = function(){
    if(!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail = null;
    return val;
  }
  
  LinkedList.prototype.removeTail = function(){
    if(!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null;
    else this.head = null;
    return val;
  }
  
  LinkedList.prototype.search = function(searchVal){
    var currentNode = this.head;
    while(currentNode){
      if(currentNode.value === searchVal){
        return currentNode.value
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  
  LinkedList.prototype.indexOf = function(value){
    var currentNode = this.head;
    var counterIndex = 0;
    var indexArray = [];
    while(currentNode){
      if(currentNode.value === value){
        indexArray.push(counterIndex);
      }
      counterIndex++;
      currentNode = currentNode.next;
    }
    return indexArray;
  }
  
  var ll = new LinkedList();
  ll.addToTail(1);
  ll.addToTail(5);
  ll.addToTail(3);
  ll.addToTail(5);
  ll.addToTail(8);
  ll.addToTail(7);
  ll.addToTail(5);
  
  console.log(ll);
  var searchedVal = ll.search(60);
  if(searchedVal) console.log(`Found ${searchedVal} in the LinkedList`);
  else console.log('Not Found');
  
  console.log(`Indexes of the value : ${ll.indexOf(5)}`)
  
  
  
  