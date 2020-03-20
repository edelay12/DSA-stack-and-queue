class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }


}

function Peak(que){
console.log(que.first.data)
}

function Display(que){
    let node = que.first;
    while(node){
        console.log(node.data);
        node = node.next;

    }
}


const starTreckQ = new Queue();

starTreckQ.enqueue('Kirk')
starTreckQ.enqueue('Spock')
starTreckQ.enqueue('Uhura')
starTreckQ.enqueue('Sulu')
starTreckQ.enqueue('Checkov')

Peak(starTreckQ)

Display(starTreckQ);

starTreckQ.dequeue('Spock')

