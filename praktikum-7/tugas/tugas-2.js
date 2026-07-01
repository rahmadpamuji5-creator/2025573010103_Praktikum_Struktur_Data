class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) { // Big O: O(1)
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop() { // Big O: O(1)
    if (this.stack.length === 0) return;
    
    const poppedValue = this.stack.pop();
    if (poppedValue === this.getMin()) {
      this.minStack.pop();
    }
  }

  top() { // Big O: O(1)
    return this.stack[this.stack.length - 1];
  }

  getMin() { // Big O: O(1)
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();

minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(2);

console.log(minStack.getMin()); 

minStack.pop();
console.log(minStack.getMin()); 

minStack.pop();
console.log(minStack.getMin());