class LinkedList {
    constructor(){
      this.head = null;
      this.tail = null;
    }
  
    addToHead(value){
      const newNode = new Node(value, this.head, null);
      if(this.head) this.head.prev = newNode;
      else this.tail = newNode;
      this.head = newNode;
    }
  
    addToTail(value){
      const newNode = new Node(value, null, this.tail);
      if(this.tail) this.tail.next = newNode;
      else this.head = newNode;
      this.tail = newNode;
    }
  
    removeHead(){
      if(!this.head) return null;
      const val = this.head.value;
      this.head = this.head.next;
      if(this.head) this.head.prev = null;
      else this.tail = null;
      return val;
    }
  
    removeTail(){
      if(!this.tail) return null;
      const val = this.tail.value;
      this.tail = this.tail.prev;
      if(this.tail) this.tail.next = null;
      else this.head = null;
      return val;
    }
  
    search(searchVal){
      let currentNode = this.head;
      while(currentNode){
        if(currentNode.value === searchVal){
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
      return null;
    }
  
    indexOf(value){
      let currentNode = this.head;
      let indexes = [];
      let indexCounter = 0;
      while(currentNode){
        if(currentNode.value === value){
          indexes.push(indexCounter);
        }
        indexCounter++;
        currentNode = currentNode.next;
      }
      return indexes;
    }
  }
  
  class Node {
    constructor(value, next, prev){
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  }
  
  const myLL = new LinkedList();
  myLL.addToHead(500);
  myLL.addToHead(400);
  myLL.addToTail(600);
  myLL.addToTail(700);
  //myLL.removeHead();
  myLL.removeTail();
  
  console.log(myLL);
  console.log(myLL.indexOf(600));