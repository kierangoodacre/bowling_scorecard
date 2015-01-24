var Scorecard = function(){
	this.frame = 10;
	this.frameTotal = 10;
	this.maxThrowCount = 2;
};

Scorecard.prototype.frameScore = function (pinCount){
	
	this.frame = pinCount;

	if (this.frame < 10 ){
		return this.frame
	}
	else {
		this.frame = 10
		return "Score must be between 0..10"
	}
};