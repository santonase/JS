/*
Перепишіть функцію, використовуючи '?' або '||'
важливість: 4
Наступна функція повертає true, якщо параметр age більший за 18.

Інакше вона запитує підтвердження через confirm і повертає його результат:

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Батьки дозволили?');
    }
}
*/


// function checkAge(age = prompt('Вік?', '')) {
//     return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// function checkAge(age = prompt('Вік?', '')) {
//     return (age > 18) || confirm('Батьки дозволили?');
// }

// checkAge();


/*
Функція min(a, b)
важливість: 1
Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

Наприклад:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

// function min(firstNumb, secondNumb) {
//     if (firstNumb < secondNumb) {
//         alert(firstNumb)
//     } else {
//         alert(secondNumb)
//     }
// }

// function min(firstNumb, secondNumb) {
//     return (firstNumb < secondNumb) ? alert(firstNumb) : alert(secondNumb)
// }

// function min(firstNumb, secondNumb) {
//     return (firstNumb < secondNumb) || alert(secondNumb)
// }

// min(2, 5)
// min(3, -1)
// min(1, 1)