class _Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(data){
        const node = new _Node(data);
//if the list is empty
        if(this.first === null){
            this.first = node;
        }
//if que is not empty
        if(this.last){
            this.last.next = node;
            node.previous = this.last;
        }
  //make the new node the last item on the queue
        this.last = node;
        this.size++;
    }

    dequeue(){
        if(this.first === null){
            return;
        }

        const node = this.first;
        this.first = this.first.next;

        if(node === this.last){
            this.last = null
        }
        this.size--;
        return node.value;
    }
}


function Peak(que){
    console.log(que.first.data)
    }

const dubStarTreckQ = new Queue();

dubStarTreckQ.enqueue('Kirk')
dubStarTreckQ.enqueue('Spock')
dubStarTreckQ.enqueue('Uhura')
dubStarTreckQ.enqueue('Sulu')
dubStarTreckQ.enqueue('Checkov')

Peak(dubStarTreckQ);

module.exports = { _Node , Queue }