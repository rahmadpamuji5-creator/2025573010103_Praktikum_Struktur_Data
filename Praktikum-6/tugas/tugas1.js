class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // O(1)
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // O(1)
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // O(n)
  insertAt(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.prepend(data);
    if (index === this.size) return this.append(data);

    const newNode = new Node(data);
    let curr = this.head;
    for (let i = 0; i < index; i++) curr = curr.next;

    newNode.prev = curr.prev;
    newNode.next = curr;
    curr.prev.next = newNode;
    curr.prev = newNode;
    this.size++;
  }

  // O(n)
  delete(data) {
    let curr = this.head;
    while (curr) {
      if (curr.data === data) {
        if (curr === this.head) this.head = curr.next;
        if (curr === this.tail) this.tail = curr.prev;
        if (curr.prev) curr.prev.next = curr.next;
        if (curr.next) curr.next.prev = curr.prev;
        this.size--;
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  // O(n)
  reverse() {
    let curr = this.head;
    let temp = null;
    while (curr) {
      temp = curr.prev;
      curr.prev = curr.next;
      curr.next = temp;
      curr = curr.prev;
    }
    if (temp) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }

  // O(n)
  print() {
    let f = "", b = "";
    let currF = this.head, currB = this.tail;
    
    while (currF) { f += `[${currF.data}] `; currF = currF.next; }
    while (currB) { b += `[${currB.data}] `; currB = currB.prev; }
    
    console.log("Maju   :", f || "Kosong");
    console.log("Mundur :", b || "Kosong\n");
  }
}


const list = new DoublyLinkedList();

console.log("--Menambah Data--");
list.append(10);  
list.append(20);  
list.prepend(5);  

console.log("---Sisip 15 di index 2---");
list.insertAt(15, 2);
list.print();

console.log("--Hapus data 20--");
list.delete(20);
list.print();

console.log("--Reverse--");
list.reverse();
list.print();