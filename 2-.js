const Stack = require('./1-')



const starTrek = new Stack();

starTrek.isEmpty()
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('Scotty')
starTrek.push('McCoy')
starTrek.peek();
starTrek.pop('McCoy')
starTrek.printList();
starTrek.isEmpty();

starTrek.is_palindrome('dadp')
starTrek.is_palindrome('dad')
starTrek.sort();