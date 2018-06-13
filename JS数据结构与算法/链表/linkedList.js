function LinkedList () {
  let head = null
  function Item (element) {
    this.element = element
    this.next = null
  }
  this.append = (element) => {
    if (head === null) {
      head = new Item(element)
    } else {
      let current = head
      while (current.next !== null) {
        current = current.next
      }
      current.next = new Item(element)
    }
  }
  this.insert = ()=> {}
  this.removeAt = ()=> {}
  this.remove = ()=> {}
  this.indexOf = ()=> {}
  this.isEmpty = ()=> {}
  this.size = ()= {}
  this.getHead = ()=> {}
  this.toString = ()=> {}
  this.print = ()=> {
    let current = head
    while (current) {
      console.log(current)
      current = current.next
    }
  }
}

let linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(0)
linkedList.print()