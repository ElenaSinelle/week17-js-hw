// Задание 1
// Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
// Подсказка: имена классов пишем с большой буквы

class Worker {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

//Создаём объекта на основе класса Worker
const worker = new Worker('Вася', 'Иванов');
//Выводим созданный объект в консоль
console.log(worker);

//----------------------------------------------------------------

//Задание 2
//Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя". Создайте объект worker2 на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName

Worker.prototype.fullName = function() {
  this._fullName = this.surname + ', ' + this.name;
  return this._fullName;
};

//Создаём объект worker2 на основе класса Worker
const worker2 = new Worker('Петя', 'Васильев');

//или так
// let worker2 = new worker.constructor('Петя', 'Васильев');

//Выводим полное имя объекта worker2 в консоль с помощью метода fullName
console.log(worker2.fullName());

//----------------------------------------------------------------

//Задание 3
//Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.
class Car {
  constructor (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = +year;
  }
}

let car = new Car('BMW', "X3", 2024);
console.log(car.brand + ', ' + car.model + ', ' + car.year);

//----------------------------------------------------------------

//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.

Car.prototype.getAge = function() {
  this._age = new Date().getFullYear() - this.year;
  return this._age;
}

//Создаём объект car2 на основе класса Car
const car2 = new Car('Mercedes', '200', 2010);
//Выводим возраст объекта car2 в консоль с помощью метода getAge
console.log('Возраст машины №2 - ' + car2.getAge() + ' лет');

//----------------------------------------------------------------

//Задание 5
//Создайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.
class Rectangle {
  constructor(width, height) {
    this.width = width < 0 ? alert('размеры прямоугольника не могут быть отрицательными') : width;
    this.height = height < 0 ? alert('размеры прямоугольника не могут быть отрицательными') : height;
  }
}

let rectangle = new Rectangle (50, 200);
console.log(`Ширина прямоугольника №1 = ${rectangle.width} см, высота = ${rectangle.height} см`);

//----------------------------------------------------------------

//Задание 6
//Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle2 на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.

Rectangle.prototype.getArea = function() {
  this._area = (this.width && this.height) ? this.width * this.height : console.log('проверьте введённые данные');
  return this._area;
}

let rectangle2 = new Rectangle (500, 3);
console.log('Площадь прямоугольника №2 = ' + (Number(rectangle2.getArea()) ? rectangle2.getArea() : 'неверное значение') + ' кв.см.');

//----------------------------------------------------------------

//Задание 7
//Создайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.

class Circle {
  _radius = 'радиус не задан';

  set radius(value) {
    if (value < 0) {
      console.log('радиус не может быть отрицательным');
    } else if (isNaN(value)) {
      console.log('радиус должен быть числом');
    } else {
      this._radius = +value;
    }
  }

  get radius() {
    return this._radius;
  }
}

let circle = new Circle;
//проверим разные варианты
// circle.radius = 'зщы';
// console.log( +circle.radius ? ('Радиус круга = ' + circle.radius + ' см') :  'радиус не задан' );
// circle.radius = '-90';
// console.log( +circle.radius ? ('Радиус круга = ' + circle.radius + ' см') :  'радиус не задан' );
circle.radius = 50;
console.log( +circle.radius ? ('Радиус круга = ' + circle.radius + ' см') :  'радиус не задан' );

//----------------------------------------------------------------

//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.
// и немного округлим результат до 2 знаков после точки

Circle.prototype.calculateArea = function() {
  this._circleArea = (this._radius * Math.PI).toFixed(2);
  return this._circleArea;
}

let circle2 = new Circle;
circle2.radius = 3;
console.log('Площадь круга №2 = ' + circle2.calculateArea() + ' кв.см.');

//----------------------------------------------------------------

//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе объект student и выведите его свойства в консоль.

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

let student = new Student('Костя', 25, 70);
console.log(`Студент: ${student.name}, возраст: ${student.age} лет, оценка: ${student.grade}`);

//----------------------------------------------------------------

//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.

Student.prototype.increaseGrade = function () {
  this.grade = this.grade + 1;
  return this.grade;
}

let student2 = new Student('Петя', 20, 85);
console.log(`Студент 2: ${student2.name}, возраст: ${student2.age} лет, оценка: ${student2.grade}`);
console.log('Новая оценка студента 2: ' + student2.increaseGrade());

//----------------------------------------------------------------

//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе объект book и выведите его свойства в консоль.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

let book = new Book ('Стихи', 'Бараш', 2015);
console.log(`Книга №1: ${book.title}, автор: ${book.author}, год издания: ${book.year}`);

//----------------------------------------------------------------

//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название и автора в консоль с помощью метода getTitleAndAuthor.

Book.prototype.getTitleAndAuthor = function() {
  this._bookData = this.title + ' - ' + this.author;
  return this._bookData;
}

let book2 = new Book ('Наука и жизнь', 'Лосяш', 2020);
console.log('Данные о книге №2: ' + book2.getTitleAndAuthor());

//----------------------------------------------------------------

//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. Создайте на его основе объект account и выведите его свойства в консоль.

class BankAccount {
  _accountNumber = 'unset';
  _balance = 'unset';

  set accountNumber(num) {
    if (String(num).length !== 8) {
      console.log('Номер счёта должен содержать 8 цифр')
    } else {
      this._accountNumber = num;
    }
  }

  set balance(value) {
    if (value < 0) {
      console.log('Ваш баланс ушёл в минус');
    } else {
      this._balance = +value;
    }
  }

  get accountNumber() {
    return this._accountNumber;
  }

  get balance() {
    return this._balance;
  }
}

let account = new BankAccount();
account.accountNumber = 88888888;
account.balance = 1000;
console.log(`Данные о счёте № ${account.accountNumber}: баланс = ${account.balance} рублей`);

// проверочка
// let account23 = new BankAccount();
// account23.accountNumber = 896321;
// account23.balance = -8;

//----------------------------------------------------------------

//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс на заданную сумму. Создайте объект account2 на основе класса BankAccount, пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.

BankAccount.prototype.deposit = function deposit(sum) {
  this._balance = this._balance + +sum;
  return this._balance;
}

let account2 = new BankAccount();
account2.accountNumber = '22222222';
account2.balance = 500;
let sum = 100;
console.log(`Счёт № ${account2.accountNumber} пополен на ${sum} рублей и равен ${account2.deposit(sum)} рублей`);

//----------------------------------------------------------------

//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". Создайте объект account3 на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс, и выведите соответствующее сообщение в консоль.

class BankAccount2 {
	constructor(balance) {
		this.balance = balance;
	}

	withdraw(amount) {
		if (amount <= this.balance) {
			this.balance = this.balance - +amount;
		} else {
			console.log('Недостаточно средств');
		}
	}
}

//Создайте объект account3 на основе класса BankAccount
//Попытайтесь снять сумму, превышающую баланс

let account3 = new BankAccount2(1000);
console.log(account3.withdraw(1500));

//----------------------------------------------------------------

//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}

let animal = new Animal('кот', 'мяу');
console.log(`Питомец ${animal.name} говорит '${animal.sound}'`);

//----------------------------------------------------------------

//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте объект animal2 на основе класса Animal и вызовите метод makeSound.

Animal.prototype.makeSound = function makeSound() {
  console.log(this.sound);
}

let animal2 = new Animal('баран', 'беееее');
animal2.makeSound();

//----------------------------------------------------------------

//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.

class PointOne {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let point = new PointOne(200, 100);
console.log(point.x + ' / ' + point.y);

//----------------------------------------------------------------

//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point2 на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}

let point2 = new Point (200, 400);
console.log(point2.getDistance());

//----------------------------------------------------------------

//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calculator на основе класса Calculator, вызовите каждый из методов и выведите результаты в консоль.

class Calculator {
  constructor(a, b) {
    this.a = isNaN(a) ? console.log('значение "a" должно быть числом') : +a;
    this.b = isNaN(b) ? console.log('значение "b" должно быть числом') : +b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
}

let calculator = new Calculator('855', 20);

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());

//----------------------------------------------------------------

//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person и выведите его свойства в консоль.
class Person {
  constructor (name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

let person = new Person('Иван', 50, 'Лондон');
console.log(`${person.name} живёт в городе ${person.city}, возраст - ${person.age} лет`);

//----------------------------------------------------------------

//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person2 на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.

Person.prototype.changeCity = function changeCity(city) {
  this.city = city;
  return this.city;
}

let person2 = new Person('Давид', 75, 'Вашингтон');
//или так
// let person2 = new person.constructor('Давид', 75, 'Вашингтон');

console.log(`${person2.name} живёт в городе ${person2.city}, возраст - ${person2.age} лет`);
console.log(`${person2.name} переехал в город ${person2.changeCity('Нью-Йорк')}`);

//----------------------------------------------------------------
//Задание 23
//Создайте класс Employee. Класс должен содержать свойства name, position и salary. Создайте на его основе объект employee и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект employee и вывести его свойства.

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  static createNewEmployee(name, position, salary) {
    let newEmployee = new this(name, position, salary);
    console.log(newEmployee);
    return newEmployee;
  }
}

let employee1 = Employee.createNewEmployee('София', 'директор', '10000');

//----------------------------------------------------------------

//Задание 24
//Добавьте в класс Employee метод calculateBonus, который будет принимать процент бонуса и увеличивать зарплату сотрудника на соответствующую сумму. Создайте объект employee2 на основе класса Employee и вызовите метод calculateBonus с процентом 10. Выведите новую зарплату сотрудника в консоль.
//Подсказка: Используйте метод call или apply, чтобы вызвать метод calculateBonus для объекта employee2 и передать процент бонуса.

let calculateBonus = function (bonus) {
  this.salary = this.salary * (bonus / 100 + 1);
  return this.salary;
}

let employee2 = Employee.createNewEmployee('Пётр', 'врач', '10000');

//расчёт с помощью bind
// let employee2Salary = calculateBonus.bind(employee2);
// console.log(employee2Salary(20));

//расчёт с помощью call
console.log(calculateBonus.call(employee2, 20));

//расчёт с помощью apply
// console.log(calculateBonus.apply(employee2, [20]));

//или обычным способом
// Employee.prototype.calculateBonus = calculateBonus;

// employee2.calculateBonus(20);
// console.log(employee2.salary);

//----------------------------------------------------------------

//Задание 25
//Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте на его основе объект product и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект product и вывести его свойства.

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = +price + ' руб';
    this.quantity = +quantity + ' кг';
  }

  static createNewProduct(name, price, quantity) {
    let newProduct = new this(name, price, quantity);
    console.log(newProduct);
    return newProduct;
  }
}

let product = Product.createNewProduct('яблоко', 100, 5);

//----------------------------------------------------------------
//Задание 26
//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product2 на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.

function calculateTotalPrice() {
  this._totalPrice = parseInt(this.price) * parseInt(this.quantity);
  console.log(this._totalPrice);
  return this._totalPrice;
}

let product2 = Product.createNewProduct('черешня', 500, 5);

Product.prototype.calculateTotalPrice = calculateTotalPrice;
product2.calculateTotalPrice();

//или через bind
// let product2TotalPrice = calculateTotalPrice.bind(product2);
// product2TotalPrice();

// или через call
// calculateTotalPrice.call(product2);

// или через apply
// calculateTotalPrice.apply(product2);

//----------------------------------------------------------------

//Задание 27
//Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, которые представляют длины сторон треугольника. Создайте на его основе объект triangle и выведите его свойства в консоль.

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1 + ' см';
    this.side2 = side2 + ' см';
    this.side3 = side3 + ' см';
  }

  static createNewTriangle(side1, side2, side3) {
    let newTriangle = new this(side1, side2, side3);
    console.log(newTriangle);
    return newTriangle;
  }
}

let triangle = Triangle.createNewTriangle(100, 200, 300);

//----------------------------------------------------------------

//Задание 28
//Добавьте в класс Triangle метод calculatePerimeter, который будет возвращать периметр треугольника (сумма длин всех сторон). Создайте объект triangle2 на основе класса Triangle со сторонами 3, 4 и 5. Выведите периметр треугольника в консоль с помощью метода calculatePerimeter.

function calculatePerimeter () {
 this._perimeter = parseInt(this.side1) + parseInt(this.side1) + parseInt(this.side1) + ' см';
 console.log(this._perimeter);
 return this._perimeter;
}

let triangle2 = Triangle.createNewTriangle(3, 4, 5);

Triangle.prototype.calculatePerimeter = calculatePerimeter;
triangle2.calculatePerimeter();

//bind
// let triangle2Perimeter = calculatePerimeter.bind(triangle2);
// triangle2Perimeter();

//call
// calculatePerimeter.call(triangle2);

//apply
// calculatePerimeter.apply(triangle2);

//----------------------------------------------------------------

//Задание 29
//Создайте класс Square. Класс должен содержать свойство side, представляющее длину стороны квадрата. Создайте на его основе объект square и выведите его свойство в консоль.

class Square {
  constructor(side) {
    this.side = side + ' см';
  }

  static createNewSquare(side) {
    let newSquare = new this(side);
    console.log(newSquare);
    return newSquare;
  }
}

let square = Square.createNewSquare(10);

//----------------------------------------------------------------

//Задание 30
//Добавьте в класс Square метод calculateArea, который будет вычислять и возвращать площадь квадрата (произведение длины стороны на саму себя). Создайте объект square2 на основе класса Square со стороной 5 и выведите его площадь квадрата в консоль с помощью метода calculateArea.

function calculateArea() {
  this._area = parseInt(this.side) ** 2 + ' кв.см.';
  console.log(this._area);
  return this._area;
}

let square2 = Square.createNewSquare(5);

Square.prototype.calculateArea = calculateArea;
square2.calculateArea();

//bind
// let square2Area = calculateArea.bind(square2);
// square2Area();

//call
// calculateArea.call(square2);

//apply
// calculateArea.apply(square2);