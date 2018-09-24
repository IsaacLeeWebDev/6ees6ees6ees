class RetiredForagerBee {
	constructor() {
		this.age = 40;
		this.job = 'gamble';
		this.canFly = false;
		this.color = 'grey';
		this.food = new Grub().food;
		this.eat = new Grub().eat;
		this.treasureChest = [];
		this.gamble = new ForagerBee().forage;
	};
	forage() {
		return 'I am too old, let me play cards instead'
	};
};
