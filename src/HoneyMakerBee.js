class HoneyMakerBee {
	constructor() {
		this.age = 10;
		this.job = 'make honey';
		this.color = new Bee().color;
		this.food = new Grub().food;
		this.eat = new Grub().eat;
		this.honeyPot = 0;
	}
	makeHoney() {
		this.honeyPot++;
	};
	giveHoney(){
		this.honeyPot--;
	};
};
