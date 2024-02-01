// enqueue ->> To add the elements at the end of the queue.
// dequeue ->> To remove the element from the front of the queue.
// peek    ->> To get the front element without removing it.
// isEmpty ->> To check whether an element is present in the queue or Not ?
// printQueue ->> To Print the element present in the queue.
// size ->> To check the Length of the Queue.


class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    dequeue(){
        if(this.isEmpty()){
            return "Can not perfome this operation"   //NOTE : "underflow" and "overflow" -> can not be defined because in js, length of array is never fixed. where in c, c++ and java array length is fixed.
        }
        return this.queue.shift();
    }
    peek(){
        if(this.isEmpty()){
            return "Queue is Empty.";
        }
        return this.queue[0];
    }
    print(){
       let  string = "";
        for(let i=0; i<this.size(); i++){
            string = string + " " + this.queue[i];
        }
        console.log("Queue : " + string);
    }
}

const myqueue = new Queue();
console.log(myqueue);
myqueue.enqueue(5);
myqueue.enqueue(10);
myqueue.enqueue(15);
myqueue.enqueue(20);



console.log(myqueue);
console.log(myqueue.size());
console.log(myqueue.print());
console.log(myqueue.dequeue());

console.log(myqueue);

console.log(myqueue.peek());
console.log(myqueue.isEmpty());
