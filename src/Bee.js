class Bee {
  constructor() {
  	this.age = 5;
  	this.color = 'yellow';
  	this.food = new Grub().food;
  	this.eat = new Grub().eat;
  	this.job = 'Keep on growing';
  };
};