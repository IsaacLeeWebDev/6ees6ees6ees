class RetiredForagerBee extends ForagerBee {
	constructor() {
		super();
		this.age = 40;
		this.job = 'gamble';
		this.canFly = false;
		this.color = 'grey';
		this.treasureChest = [];
		this.gamble = ForagerBee.prototype.forage;
	};
	forage() {
		return 'I am too old, let me play cards instead'
	};
};
