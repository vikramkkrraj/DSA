// Ques 1 : Circular Queue Implementation
// Design your implementation of the circular queue. The circular queue is a
// linear data structure in which the operations are performed based on First In First Out
// principle, and the last position is connected back to the first position to make a circle.


function CircularQueue(k){
    this.queue = [];
    this.size = k
}

const cqueue = new CircularQueue(5);
console.log(cqueue);

// adding element into queue.
CircularQueue.prototype.enqueue = function(element){
    if(this.queue.length === this.size) return false;
    this.queue.push(element);
    return true;     // returning true false bcoz expected in leetcode question.
}

cqueue.enqueue(10);
cqueue.enqueue(20);
cqueue.enqueue(30);
console.log(cqueue);

// remove element from queue
CircularQueue.prototype.dequeue = function(){
    if(this.queue.length===0) return false;
    return this.queue.shift();
}

CircularQueue.prototype.front = function(){
    if(this.queue.length===0) return -1;
    return this.queue[0];
}

CircularQueue.prototype.rear = function(){
    if(this.queue.length===0) return -1;
    return this.queue[this.queue.length-1];
}
CircularQueue.prototype.isEmpty=function(){
    return this.queue.length === 0;
}

CircularQueue.prototype.isFull = function(){
    return this.size === this.queue.length;
}

cqueue.dequeue();
console.log(cqueue);

console.log(cqueue.front());
console.log(cqueue.rear());
console.log(cqueue.isEmpty());
console.log(cqueue.isFull());
console.log(cqueue.size);
cqueue.enqueue(40);
cqueue.enqueue(50);
cqueue.enqueue(60);
console.log(cqueue.enqueue(60))
console.log(cqueue.enqueue(70));
console.log(cqueue);
