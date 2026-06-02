class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this._size++;
  }

  removeHead() {
    if (!this.head) return null;
    const data = this.head.data;
    this.head = this.head.next;
    this._size--;
    return data;
  }

  peekHead() {
    return this.head ? this.head.data : null;
  }

  get size() {
    return this._size;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

class Stack {
  constructor() {
    this._list = new LinkedList();
  }

  push(data) {
    this._list.prepend(data);
  }

  pop() {
    return this._list.removeHead();
  }

  peek() {
    return this._list.peekHead();
  }

  isEmpty() {
    return this._list.size === 0;
  }

  size() {
    return this._list.size;
  }

  print() {
    console.log(this._list.toArray());
  }
}

const actions = ["Ketik Hello", "Bold teks", "Ubah warna", "Perbesar font", "Tambah gambar"];
const undoStack = new Stack();
const redoStack = new Stack();

actions.forEach(aksi => undoStack.push(aksi));

console.log("=== Undo Stack ===");
undoStack.print();

console.log("\n=== Undo 3x ===");
for (let i = 0; i < 3; i++) {
  const aksi = undoStack.pop();
  console.log("Undo:", aksi);
  redoStack.push(aksi);
}

console.log("\nUndo Stack:", undoStack.isEmpty() ? "kosong" : "");
undoStack.print();
console.log("Redo Stack:");
redoStack.print();

console.log("\n=== Redo 1x ===");
const redo = redoStack.pop();
console.log("Redo:", redo);
undoStack.push(redo);

console.log("\nUndo Stack setelah redo:");
undoStack.print();