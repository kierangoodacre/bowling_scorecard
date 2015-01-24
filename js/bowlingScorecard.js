var Scorecard = function(){
	this.frame = 10;
	this.frameTotal = 10;
	this.throwCount = 2;
};

Scorecard.prototype.frameScore = function (pinCount){
	
	this.frame = pinCount;

	if (this.frame <= 9 ){
		this.throwCount = 1
		return this.frame
	}
	else if (this.frame === 10){
		this.throwCount = 0
		return this.frame
	}
	else {
		this.frame = 10
		return "Score must be between 0..10"
	}
};