function HashTable(size){
    this.buckets = new Array(size);
    this.numOfbuckets = this.buckets.length;
}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key){
    var total = 0;
    for(var i=0 ; i<key.length ; i++){
        total += key.charCodeAt(i);
    }
    return total % this.numOfbuckets;
};

HashTable.prototype.insert = function(key, value){
    var index = this.hash(key);
    console.log(`INDEX of ${key} : ${index}`);
    if(!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    else if(this.buckets[index].key === key) this.buckets[index].value = value; 
    else {
        var currentNode = this.buckets[index];
        while(currentNode.next){
            if(currentNode.next.key === key){
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
};

HashTable.prototype.get = function(key){
    var index = this.hash(key);
    console.log(`Index : ${index}`);
    if(!this.buckets[index]) {
        console.log('no such value present');
        return null;
    }
    else {
        var currentNode = this.buckets[index];
        while(currentNode){
            if(currentNode.key === key){
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

};

HashTable.prototype.retrieveAll = function(){
    var allNodes = [];
    for(var i=0 ; i<this.buckets.length ; i++){
        var currentNode = this.buckets[i];
        while(currentNode){
            allNodes.push(currentNode);
            currentNode = currentNode.next;
        }
    }
    return allNodes;
}

var myHT = new HashTable(30);
console.log(myHT);
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Meera', 'meera.shrihari@yahoo.com');
myHT.insert('Reema', 'reema@yahoo.com');
console.log(myHT.buckets);
myHT.insert('Meera', 'shrihari.meera@gmail.com');
console.log(myHT.buckets);

console.log(`Value : ${myHT.get('Meea')}`);

//myHT.retrieveAll();
console.log(myHT.retrieveAll());