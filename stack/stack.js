class Stack {
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }
    size(){
        return this.stack.length;
    }
    isEmpty(){
        return this.stack.length === 0;
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty. can not perform";
        }
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        return this.stack[this.size() -1];
    }
    print(){
        let i=0;
        while(this.isEmpty()){
            console.log(this.stack[i]);
            i++;
        }
    }
}

const stack = new Stack();
console.log(stack);
stack.push(10);
stack.push(30);
stack.push(50);
console.log(stack);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());