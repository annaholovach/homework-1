// завдання 2

console.log('Holovach');

// завдання 3

let age = 20;
let isFemale = true;

alert(age);
alert(isFemale);

age = isFemale;

alert(age);
alert(isFemale);

// завдання 4

let person = {
    name: 'Anna',
    age: 20,
    isAdult: true,
    job: undefined,
    dateOfHiring: null,
};

// завдання 5

let isAdult = confirm('чи досяг повноліття?');
console.log(isAdult);

// завдання 6

let firstName = 'Anna';
let lastName = 'Holovach';
let group = 'js';
let birthJear = 2003;
let isMarried = false;

console.log(birthJear);
console.log(isMarried);
console.log(firstName);
console.log(lastName);
console.log(group);

let catName = undefined;
let catAge = null;

console.log(typeof catName);
console.log(typeof catAge);

// завдання 7

let login = prompt('login?', '');
let email = prompt('email?', '');
let password = prompt('password?', '')

alert(`Dear ${login}, your email is ${email}, your password is ${password}`);

// завдання 8

let numberOfSecondsInHour = 60 * 60;
let numberOfSecondsInDay = numberOfSecondsInHour * 24;
let numberOfSecondsInMonth = numberOfSecondsInDay * 30;

alert(`кількість секунд в годині: ${numberOfSecondsInHour}`);
alert(`кількість секунд в добі: ${numberOfSecondsInDay}`);
alert(`кількість секунд в місяці ${numberOfSecondsInMonth}`);