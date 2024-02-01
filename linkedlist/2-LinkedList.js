// define a function to create a new node
// we require value and next will be null 
// node will be creted using object.
function createNode(value){
    return {
        value : value,
        next : null,
    }
}

// define a function to create a linkedList 
// to create linkedList required head and tail initially both will be null
// linkedlist will be object of head and tail objects
function createLinkedList(){
    return {
        head : null, 
        tail : null,
    }
}

// define a function to append a new node to end to the linked list.
// required list and the value to be appended.

function append(list, value){
    const newNode = createNode(value);
    if(!list.head){
        list.head = newNode;
        list.tail = newNode;
    }else{
        list.tail.next = newNode;
        list.tail = newNode;
    }
}


// define a function to append a new node to begning of linked list.
function prepend(list, value){
    const newNode = createNode(value);
    newNode.next = list.head;
    list.head = newNode;
    if(!list.tail){
        list.tail = newNode;
    }
}


// print the linked list.
function printList(list){
    const values = [];
    let current = list.head;
    while(current){
        values.push(current.value);
        current = current.next;
    }

    console.log(values.join(' -> '))
}


// function to getSize of linkedlist.
function getSize(list){
    let size = 0 ;
    current = list.head;
    while(current){
        size++;
        current = current.next;
    }

    return size;
}


// create linked list and perform operations.
const list1 = createLinkedList();
append(list1, 10);
append(list1, 20);
prepend(list1, 5);
append(list1, 30);

printList(list1);
console.log(getSize(list1))