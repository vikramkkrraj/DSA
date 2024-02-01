// const list = {
//     head : {
//         data : 6,
//         next : {
//             data : 10,
//             next : {
//                 data : 3,
//                 next : {
//                     data : 9,
//                     next : null
//                 }
//             }
//         }
//     }
// }

// console.log(list);



class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtHead(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAtIndex(index, data){
        if(index <0 || index > this.size){
            return "Invalid Index";
        }

        if(index===0){
            this.insertAtHead(data);
            return;
        }

        let newNode = new Node(data);
        let temp = this.head;
        for(let i=0; i<index -1; i++){
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;
    }

    insertAtLast(data){
        let temp = this.head;
        while(temp.next !==null ){
            temp=temp.next;
        }
        let newNode = new Node(data);   
        temp = newNode;
    }


    print(){
        let result = "" 
        let temp = this.head;
        while(temp !==null) {
            result += `${temp.data} -->`;
            temp = temp.next;
        }
        return result;
    }

}

const list = new LinkedList();
console.log(list);
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtHead(30);
console.log(list);
console.log(list.print())
list.insertAtIndex(2,40)
console.log(list);
list.insertAtLast(50);
console.log(list);