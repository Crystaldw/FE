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
  
  
  