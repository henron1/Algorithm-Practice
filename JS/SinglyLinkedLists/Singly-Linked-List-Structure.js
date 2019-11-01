// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        
    }
}

// var first = new Node("Hello")
// first.next = new Node("there")
// first.next.next = new Node("person")
// first.next.next.next = new Node("reading")
// first.next.next.next.next = new Node("this.")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")


