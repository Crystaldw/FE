let users = [
	['Ivan', 200, 'ivan@example'],
	['Andrei', 300, 'andrei@example'],
	['Igor', 100, 'igor@example']
];

console.log(users[2][1]);
console.log(users[2][1]);
console.log(`${users[1][2]} - ${users[2][1]}`);

function iven_odd(number) {
    if (number % 2 === 0) {
      return `${number} - четное`;
    } else {
      return `${number} - нечетное`;
    }
  }
  
  // Пример использования
  console.log(iven_odd(10)); // Выводит "7 - нечетное"
  console.log(iven_odd(11)); // Выводит "10 - четное"

  function minus_plus(number) {
    if (number < 0) {
      return "Отрицательное";
    } else {
      return "Положительное";
    }
  }
  console.log(minus_plus(55));
  console.log(minus_plus(-5));

  function is_negative(num) {
	return num < 0;
}

console.log(is_negative(-20));
console.log(is_negative(15));
  
let test = [ [1, 2], ['x', 'y'], 'Andrei' ];
console.log(test [0][1]);
console.log(test [1][0]);
console.log(test 'Andrei');

///// Вывод
// 2
// x
// 'Andrei
const name = 'Ivan';
const age = 30;
const message = `Привет, меня зовут ${name} и мне ${age} лет`;
const message = 'Привет, меня зовут' +name +' и мне' + age + ' лет';

console.log(message); // Вывод: Привет, меня зовут Ivan и мне 30 лет


function negativeNum(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      console.log(numbers[i]);
    }
  }
}

// Пример использования:
let nums = [1, -2, 3, -4, 5, -6];
negativeNum(nums);