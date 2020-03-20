const { Queue } = require("./5-doublyList");

function showService(que) {
  let serviceLine = que;
  let customer = serviceLine.first;

  this.isPrepared = () => {
    let result = Math.floor(Math.random() * 4);
    return result > 0;
  };

  while (customer) {
    let prepared = this.isPrepared();
    if (prepared) {
      bankQueue.enqueue(customer.data);
      console.log(`${customer.data} was prepared and served.`);
    } else {
      console.log(
        `${customer.data} was not prepared and was sent to the end of the line.`
      );
    }
    customer = customer.next;
  }
  bankQueue.size > 0 ? console.log("Service Done.") : showService(bankQueue);
}

let bankQueue = new Queue();

bankQueue.enqueue("Kirk");
bankQueue.enqueue("Spock");
bankQueue.enqueue("Uhura");
bankQueue.enqueue("Sulu");
bankQueue.enqueue("Evan");
bankQueue.enqueue("Frank");
bankQueue.enqueue("John");
bankQueue.enqueue("Jane");
bankQueue.enqueue("Sherlock");
bankQueue.enqueue("Madonna");
bankQueue.enqueue("David");
bankQueue.enqueue("Christopher");
bankQueue.enqueue("Madonna");
bankQueue.enqueue("Beyonce");

showService(bankQueue);
