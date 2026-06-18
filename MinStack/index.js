class MinStack {
  constructor() {
    this.stack = [];
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1][0];
  }

  push(val) {
    let min = 0;
    if (this.stack.length === 0) min = val;
    else {
      min =
        this.stack[this.stack.length - 1][1] < val
          ? this.stack[this.stack.length - 1][1]
          : val;
    }
    return this.stack.push([val, min]);
  }

  getMin() {
    return this.stack[this.stack.length - 1][1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("minStack.getMin():>> ", minStack.getMin()); // return -3
minStack.pop();
minStack.top(); // return 0
console.log("minStack.getMin():>> ", minStack.getMin()); // return -2
