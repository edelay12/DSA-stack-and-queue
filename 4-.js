//camelcase tester input: 'this-is-the-string'

function toCamelCase(str){
    str = str.split('-');
    console.log(str)
 for(let i in str){
        if(i != 0){
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
    }
    console.log(str.join(''));
    return str.join('');
    }

    toCamelCase('this-is-the-string')