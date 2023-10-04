// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val); //Setting a variable equal to a new node
        newNode.next = this.head //Hooks to the whole system of the linked list
        this.head = newNode; //Points the head instance variable to the new Node
        this.length ++; //You increased the length of the list by 1 so increment it by 1
        return this; //Return the whole list which is ourselves = this


        // Step1: Should reassign the head pointer when new nodes are added to the head
        // Step2: Should reassign the head pointer when a new node is added to the head of an empty list
        // Step3: Should update the length property after new nodes are added to the head
        // Step4: Should return the updated list after new nodes are added to the head


    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val); //Setting a variable equal to a new node

        this.length ++; //Increment the length;

        if (!this.head) { //Checking to see if the head is empty
            this.head = newNode; //If it is, point the head to the newNode
            return this; //Return the head
        }else{
            let curr = this.head; //New pointer variable to the head
            while (curr.next) { //While the next element in the list is not empty
                curr = curr.next; //point to the next element in the list
            }
            curr.next = newNode; //Set curr.next pointer to be newNode
        }


        return this; //Return the whole list which is ourselves = this

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
         // Step3: Should properly update the length property after removing the head node (decrement)
        this.length --;
        // Step5: Should return the removed head node when removeFromHead is called
        return removedNode;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

    //    Step1: Should return undefined if the list is empty
        if(!this.head){
            return undefined;
        }
    //    Step2: Should remove tail node from the list when removeFromTail is called
    //    Step3: Should reassign the head pointer to null when tail is removed from a list of only one node
        let current = this.head;
        let previous = null;

        while(current.next){
            previous = current;
            current = current.next;
        }

        if(previous){
            //    Step4: Should reassign the new tail\'s next pointer to null
            previous.next = null;
        }else{
            this.head = null;
        }
        //    Step5: Should correctly update the length property after removing the tail node
        this.length --;
        //    Step6: Should return the removed tail node when removeFromTail is called
        return current;



        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {

        // Step1: Should return undefined for an empty list
        if(!this.head){
            return undefined;
        }else{
            // Step2: Should return the value of the head for a non-empty list
            return this.head.value
        }

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        let current = this.head;
        while(current){   // Step1: Should not console.log anything when there are no nodes
        // Step2: Should console.log the values of the nodes in the linked list in order from head to tail
            console.log(current.value);
            current = current.next;
        }


        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
