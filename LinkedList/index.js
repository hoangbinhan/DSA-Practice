class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Thêm vào cuối
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
    this.size++;
    return this;
  }

  // Thêm vào đầu
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
    return this;
  }

  // Xóa theo giá trị
  remove(value) {
    if (!this.head) return this;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return this;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
    return this;
  }

  // Tìm kiếm
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Chuyển thành mảng
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  print() {
    console.log(this.toArray().join(" -> "));
  }
}

// Dùng thử
const list = new LinkedList();
list.append(1).append(2).append(3).prepend(0);
list.print(); // 0 -> 1 -> 2 -> 3
list.remove(2);
list.print(); // 0 -> 1 -> 3
console.log(list.size); // 3
