class ForagerBee {
	constructor() {
		this.age = 10;
		this.job = 'find pollen';
		this.color = new Bee().color;
		this.food = new Grub().food;
		this.eat = new Grub().eat;
		this.canFly = true;
		this.treasureChest = [];
	};
	forage(treasure) {
		this.treasureChest.push(treasure);
	};
};
