class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head= newNode;
    }

    addLast(data){
        const newNode = new Node(data);
        
        if(!this.head){
            newNode = this.head;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
         current.next = newNode;
    }

    size(){
        let count = 0
        let current = this.head;
        while(current){
            count++;
            current = current.next; 
        }
        return count;
    }

    addAtIndex(index, data){
        const newNode = new Node(data);
        if(index < 0 || index > this.size()){
            console.error("Invalid Index");
            return "Invalid Input";
        }
        if(index === 0) {
            // newNode.next = this.head;
            // this.head = newNode;
            this.addFirst(data);
            return;
        }
        let current = this.head;
        for(let i = 0; i< index-1; i++){
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    removeFirst(){

        if(!this.head){
            return 
        }
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }

        current.next = null;
    }
    removeFromIndex(index){
        if(index <0 || index>this.size()){
            return "Invalid Index";
        }

        if(index===0){
            this.head = this.head.next;
            return ;
        }

        let current = this.head; 
        for(let i=0; i<index-1 ; i++){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
        }
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
   
    


}
const list = new linkedList();
console.log(list);
list.addFirst(30);
list.addFirst(20);
console.log(list);
console.log(list.addLast(40));
console.log(list);
console.log(list.size());
list.addAtIndex(0,10);
console.log(list);
list.addAtIndex(2,90);
console.log(list);
list.removeFirst();
console.log(list);
list.removeLast();
console.log(list);
list.removeFromIndex(1);
console.log(list);
console.log(list.print())