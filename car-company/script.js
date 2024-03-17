'use strict'
const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];

//---------------------------------------------
//class Transport

class Transport {
 constructor(obj) {
  this.id = obj.id;
  this.type = obj.type;
  this.price = obj.price;
  this.brand = obj.brand;
  this.image = obj.image;
 }

  getInfo() {
    return `Transport type: ${this.type} - brand-name: ${this.brand}`;
  }

  getPrice() {
    return `Transport type: ${this.type}, brand-name: ${this.brand} - price: ${this.price}`;
  }
}

//---------------------------------------------
//class Car

class Car extends Transport {
  constructor(obj) {
    super(obj);
    this.doors = obj.doors;
  }

  getDoorsCount() {
    return `Car brand-name: ${this.brand}, has ${this.doors} doors`;
  }
}

//---------------------------------------------
//class Bike

class Bike extends Transport {
  constructor(obj) {
    super(obj);
    this.maxSpeed = obj.maxSpeed;
  }

  getMaxSpeed() {
    return `Bike brand-name: ${this.brand}, runs at speed ${this.maxSpeed} km per hour`;
  }
}

//---------------------------------------------
//create objects from data array and check classes

let transportObjs = data.map(item => new Transport(item));
console.log(transportObjs);
transportObjs.forEach(item => console.log(item.getInfo()));

let cars = data.filter(item => (new Transport(item)).type === 'car').map(car => new Car(car));
console.log(cars);
cars.forEach(car => console.log(car.getDoorsCount()));

let bikes = data.filter(item => (new Transport(item)).type === 'bike').map(bike => new Bike(bike));
console.log(bikes);
bikes.forEach(bike => console.log(bike.getMaxSpeed()));


//---------------------------------------------
//Additional functionality: append items function

function drawItem(id) {
  this.container = document.getElementById(id);
  this.container.className = 'active';

  this.itembox = document.createElement('div');
  this.itembox.className = 'visible';

  this.img = document.createElement('img');
  this.img.style.height = '100px';
  this.img.src = this.image;
  this.itembox.append(this.img);

  this.brandPara = document.createElement('p');
  this.brandPara.innerText = this.brand;
  this.itembox.append(this.brandPara);

  this.container.append(this.itembox);
}

function removeItem(id) {
  let container = document.getElementById(id);
  let itemboxArr = container.querySelectorAll('.visible');
  itemboxArr.forEach(item => item.remove());
  container.classList.remove('active');
}


//---------------------------------------------
//event listeners

document.getElementById('transport__get').addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.nextElementSibling.className === 'active') {
    removeItem('transport__items');
    console.log(document.getElementById('transport__items'))
  } else {
    transportObjs.forEach(item => drawItem.call(item, 'transport__items'));
  }
});

document.getElementById('car__get').addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.nextElementSibling.className === 'active') {
    removeItem('car__items');
  } else {
    cars.forEach(car => drawItem.call(car, 'car__items'));
  }
});

document.getElementById('bike__get').addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.nextElementSibling.className === 'active') {
    removeItem('bike__items');
  } else {
    bikes.forEach(bike => drawItem.call(bike, 'bike__items'));
  }
});
