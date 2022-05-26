//Задание 1:

for(let a = 10; a < 51; a = a + 2){
    console.log(a);
}

//Задание 2:

const myData = {
    firstName1: 'Анна',
    lastName1: 'Мостицкая',
    age: 18,
    pets: true
};

//Задание 3:

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал',
    'где должен был',
    'нужных вещей,',
    'отправился по лавкам.',
    'пробыть сутки',
    'Савельич'
]

let result = array[3] + ' ' + array[7] + ' ' + array[0] + ' ' + array[8] + ' ' + array[11] + ' ' + array[5] + ' ' + array[9] + ' ' + array[6] + ' ' + array[4] + ' ' + array[1] + ' ' + array[12] + ' ' + array[2] + ' ' + array[10];
console.log(result);

//Задание 4:

const showFullName = (firstName, lastName) => {
const fullName = `${firstName} ${lastName}`
    console.log(fullName);
}

showFullName('Анна', 'Мостицкая');
    
//Задание 5:
 
let i = 19;
while(i < 66){
    i = i + 2; 
    console.log(i);
}