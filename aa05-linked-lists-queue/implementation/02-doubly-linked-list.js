// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {

            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
         // Step1: Should return undefined if the list is empty
        // Step4: Should reassign the head pointer to null when head is removed from a list of only one node
        if(!this.head){
            return undefined;
        }
        // Step2: Should remove head node from the list by reassigning the head pointer to the next node
        const removedNode = this.head;
        this.head = this.head.next
        if(this.head){ //Increment through each element in a list, removing the prev of the head
            this.head.prev = null
        }else { //When we get to the last element and we remove the head, also remove the tail.
            this.tail = null
        }
         // Step3: Should properly update the length property after removing the head node (decrement)
        this.length --;
        // Step5: Should return the removed head node when removeFromHead is called
        return removedNode.value;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if(!this.head){
            return undefined
        }

        const removedNode = this.tail;
        this.tail = this.tail.prev;
        if(this.tail){
            this.tail.next = null
        }else{
            this.head = null
        }
        this.length --;
        return removedNode.value;

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if(!this.head){
            return undefined
        }else{
            return this.head.value
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if(!this.tail){
            return undefined
        }else{
            return this.tail.value
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
