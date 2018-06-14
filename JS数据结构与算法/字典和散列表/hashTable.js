const LinkedList = require('./linkedList')

function HashTable () {
  let items = []
  let Item = function (key, value) {
    this.key = key
    this.value = value
  }
  function hashcode (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }
  this.put = (key, value)=> {
    let pos = hashcode(key)
    if (!items[pos]) {
      items[pos] = new LinkedList()
    }
    items[pos].append(new Item(key, value))
  }
  this.remove = (key)=> {}
  this.get = (key)=> {
    
  }
  this.show = ()=> {
    items.forEach((item)=> {
      if (item) {
        console.log(item.print())
      }
    })
  }
}

let hashtable = new HashTable()
hashtable.put('eric', 'bigbigbig')
hashtable.put('saber', 'smallsmallsmall')
hashtable.show()