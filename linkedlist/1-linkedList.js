class List{
    constructor(data){
        this.head = {
            value : data,
            next : null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    addNode(nodeData){
        let newNode  = {
            value : nodeData,
            next : null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
    }

    size(){
        return this.length; 
    }

   
}

let list = new List(200);
list.addNode(300);
list.addNode(400);
list.addNode(500);
console.dir(list);
list.size();
