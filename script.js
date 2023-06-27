/*პირველი დავალება;
შევქმნათ ფუნქცია რომელიც ორ პარამეტრს(a,b) მიიღებს და დაგვიბრუნებს პასუხს, ერთმანეთის ტოლია თუ 
არა ისინი*/

//ტიპის განურჩევლად
function compare(a, b) {
    if (a == b) {
        console.log('ტოლია');
    } else {
        console.log('არ არის ტოლი');
    }
}
//აუცილებლად ერთი ტიპი
function compare2(a, b) {
    if (a === b) {
        console.log('ტოლია');
    } else {
        console.log('არ არის ტოლი');
    }
}

compare(3, '3');
compare2(3, '3');


/* მეორე დავალება;
ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას ფარენჰაიტებში და შეცვლის ცელსიუზე*/
function farenheitToCelsius(tempF) {
    if (typeof(tempF) !== 'number') {
        return false;
    }
    var tempC = (5 / 9) * (tempF - 32);
    return tempC;
}
console.log(farenheitToCelsius(100));


/* მარტივი კალკულატორი:) */
function calculator(num1, num2, operator) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        console.log('Enter numbers!')
        return false;
    } else if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            console.log('Can`t divide by zero.')
            return false;
        }
        return num1 / num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else {
        console.log('Unknow operator(* ; / ; + ; -)')
        return false;
    }
}

console.log(calculator(3, 5, '+'));
console.log(calculator(3, 0, '/'));
console.log(calculator(3, 5, '/'));
console.log(calculator(3, 5, '-'));
console.log(calculator(3, 5, '*'));