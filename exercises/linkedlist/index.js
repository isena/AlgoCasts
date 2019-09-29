// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let count = 0
    let node = this.head

    while(node) {
      count++
      node = node.next
    }

    return count
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head

    while(node.next) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    let previous = this.head
    let node = previous.next

    while (node.next) {
      previous = node
      node = node.next
    }

    previous.next = null
  }

  insertLast(data) {
    const node = new Node(data)
    const last = this.getLast()

    if (last) {
      last.next = node
    } else {
      this.head = node
      return
    }
  }

  getAt(index) {
    let count = 0
    let node = this.head

    while(node) {
      if (count === index) {
        return node
      }

      count++
      node = node.next
    }

    return null
  }

  removeAt(index) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.getAt(1)
      return
    }

    const node = this.getAt(index - 1)

    if (!node || !node.next) {
      return
    }
    
    const next = node.next

    node.next = next.next ? next.next : null
  }
}

module.exports = { Node, LinkedList }
