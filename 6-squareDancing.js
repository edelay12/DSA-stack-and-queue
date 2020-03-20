const { Queue } = require("./5-doublyList");

function findPartners(que) {
  let node = que.first;
  let reserveMale = [];
  let reservesFemale = [];
  let results = [];
  let pair = { male: null, female: null };

  while (node) {
    //female case
    if (node.data.gender == "F") {
      if (pair.female == null) {
        if (reserveMale.length > 0 && pair.male == null) {
          pair.male = reserveMale[0];
          reserveMale.splice(0, 1);
          pair.female = node.data;
        } else {
          pair.female = node.data;
        }
      } else reserversFemale.push(node.data);
    }

    //male case
    if (node.data.gender == "M") {
      if (pair.male == null) {
        if (reservesFemale.length > 0 && pair.female == null) {
          pair.female = reservesFemale[0];
          reservesFemale.splice(0, 1);
          pair.male = node.data;
        } else {
          pair.male = node.data;
        }
      } else reserveMale.push(node.data);
    }

    //check if there is a pair
    if (pair.male && pair.female) {
      results.push(pair);
      pair = { male: null, female: null };
    }

    node = node.next;
  }
  console.log(results);
  if (!reserveMale.length == 0) console.log(reserveMale);
  if (!reservesFemale.length == 0) console.log(reservesFemale);
}

let DanceQue = new Queue();

DanceQue.enqueue({ gender: "F", name: "Jane" });
DanceQue.enqueue({ gender: "M", name: "Frank" });
DanceQue.enqueue({ gender: "M", name: "John" });
DanceQue.enqueue({ gender: "M", name: "Sherlock" });
DanceQue.enqueue({ gender: "F", name: "Madonna" });
DanceQue.enqueue({ gender: "M", name: "David" });
DanceQue.enqueue({ gender: "M", name: "Christopher" });
DanceQue.enqueue({ gender: "F", name: "Beyonce" });

findPartners(DanceQue);
