var Scorecard = function(){
	this.frame = 0;
	this.frameTotal = 10;
	this.throwCount = 2;
	this.pointsTotal = 0;
	this.pointsTally = [];
};

Scorecard.prototype.frameScore = function (pinCount){
	this.frame += pinCount;

	if (this.frame <= 9 ){
		this.throwCount -= 1
		this.pointsTally.push(this.frame)
		this.pointsTotal += this.frame
		this.frameTotal -= 1
		this.gameOver()
		this.frame
	}
	else if (this.frame === 10){
		this.throwCount -= 2
		this.pointsTotal += this.frame
		this.pointsTally.push(this.frame)
		this.frameTotal -= 1
		this.gameOver()
		this.resetThrows()
		this.resetFrame()
		this.frame
	}
	else {
		this.frame = 0
		this.throwCount -= 0
		this.gameOver()
		return "Score must be between 0..10"
	}
	// while (pinCount === 10) {
	// this.pointsTotal += this.pointsTally.slice(1,3).reduce(addTally, 0);
	// }

	// function addTally(a, b) {
	// 	return a + b;

};


Scorecard.prototype.gameOver = function (){
	if (this.frameTotal < 0){
		this.frameTotal = 0
	};
};

Scorecard.prototype.resetGame = function() {
	this.frameTotal = 10;
	this.pointsTotal = 0
};

Scorecard.prototype.resetThrows = function(){
	this.throwCount = 2
};

Scorecard.prototype.resetFrame = function() {
	this.frame = 0
};

Scorecard.prototype.strike = function() {
	this.pointsTotal += this.pointsTally.slice(1,3).reduce(addTally, 0);
	}

	function addTally(a, b) {
		return a + b;
		
};

