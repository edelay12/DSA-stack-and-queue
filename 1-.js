class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data){
        if(this.top == null){
            this.top = new _Node(data,null);
            this.size++ 
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
        this.size++
    }

    pop(){
        const node = this.top;
        this.top = node.next
        this.size--;
        return node.data
    }

    printList(){
        let node = this.top;
        while(node){
            console.log(node.data)
            node = node.next;
        }
    }

    peek(){
        console.log('top = ' + this.top.data)
    }

    isEmpty(){
        return console.log(!this.size);
    }

    is_palindrome(s) {
        this.ReverseString = (str) => {
            return str ? this.ReverseString(str.substr(1)) + str[0] : str;
        }
        s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

        const sReversed = this.ReverseString(s);
        return  s == sReversed ? console.log(true) : console.log(false);
    }

    sort(){
        let node = this.top;
        let temp = []
        while(node){
         //   if (node.data.length < node.next){
       //     console.log(node.data + node.next);
         //   }
            console.log(node)
            console.log(node.next)
            node = node.next;
        }
    }
};




module.exports = Stack;