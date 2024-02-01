function Stack(){
    this.stack = [];
}

// console.log(new Stack());

// push
Stack.prototype.push = function(data){
    this.stack.push(data);
}

// size
Stack.prototype.size = function(){
    return this.stack.length ;
}

// isEmpty
Stack.prototype.isEmpty = function(){
    return this.stack.length ===0;
}

// pop from top
Stack.prototype.pop = function(){
    if(this.stack.length===0) return "Stack is Empty";
    return this.stack.pop();
}

// peek
Stack.prototype.peek = function(){
    if(this.stack.length===0) return "Stack is Empty";
    return this.stack[this.size()-1];
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

