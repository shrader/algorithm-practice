class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){  
    let pushVal = new Node(val);
    if(!this.head){
        this.head = pushVal;
        this.tail = this.head;
    } else {
      this.tail.next = pushVal;
      this.tail = pushVal;
    }
    this.length += 1;
    return this;
  }
  pop(){
    if(!this.head){
        return undefined;
    }
    if (this.head === this.tail){
        let removedVal = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return removedVal;
    }
    let current, pre;
    current = this.head
    while(current.next){
        pre = current;
        current = current.next;
    }
    this.tail = pre;
    pre.next = null;  
    this.length--;
    return current;
  }
  shift(){
      if (!this.head) return undefined;
      let shifted = this.head;
      this.head = shifted.next;
      shifted.next = null;
      this.length--;
      if(this.length === 0){
          this.tail = null;
      }
      return shifted;
  }
  unshift(val){
    let unshiftVal = new Node(val);
    if (!this.head){
        this.head = unshiftVal;
        this.tail = unshiftVal;
        this.length++;
    } else{ 
        unshiftVal.next = this.head;
        this.head = unshiftVal;
        this.length++;
    }
    return this;
  }
  get(index){
    if (index < 0 || index >= this.length){
      return null;
    }
    let count = 0;
    let pointer = this.head;
    while (count < index) {
      pointer = pointer.next;
      count++
    }
    return pointer;
  }
  set(value, index){
    let node = this.get(index);
    if (node === null) return false;
    else node.val = value;
    return true;
  }
  insert(value, index){
    if (index < 0 || index > this.length) return false;
    if (index === this.length){
     this.push(value);
     return true;
    }
    if (index === 0){
      this.unshift(value);
      return true;
    }
    let prev = this.get(index - 1);
    let after = this.get(index);
    prev.next = new Node(value);
    prev.next.next = after;
    this.length++;
    return true;
  }
  remove(index){
    if (index < 0 || index >= this.length) return undefined;
    if (index === length - 1) return this.pop();
    if (index === 0) return this.shift();
    let behind = this.get(index - 1);
    let ahead = behind.next.next;
    let removed = behind.next;
    behind.next = ahead;
    this.length--;
    return removed;
  }
  reverse(){
    let current = this.head;
    let after = current.next;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    while(prev !== this.head){
      current.next = prev;
      prev = current;
      current = after;
      after = current.next;
    }
  }
}
