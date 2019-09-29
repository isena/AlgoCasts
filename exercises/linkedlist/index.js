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
    return this.insertAt(data, 0)
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
    return this.getAt(0)
  }

  getLast() {
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.removeAt(0)
  }

  removeLast() {
    this.removeAt(this.size() - 1)
  }

  insertLast(data) {
    this.insertAt(data, this.size())
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

  insertAt(data, index) {
    if (index === 0) {
      const next = this.head
      this.head = new Node(data, next)
      return
    }

    const previous = this.getAt(index - 1) || this.getLast()
    const next = previous.next
    previous.next = new Node(data, next)
  }

  forEach(fn) {
    let node = this.head
    let count = 0

    while(node) {
      fn(node, count)
      node = node.next
      count++
    }
  }
}

module.exports = { Node, LinkedList }
