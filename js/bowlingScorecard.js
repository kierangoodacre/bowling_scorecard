var Scorecard = function(){
	this.frame = 10;
};

Scorecard.prototype.frameScore = function (pinCount){
	
	this.frame = pinCount;

	if (this.frame < 10 ){
		return this.frame
	}
	else {
		return "Score must be between 0..10"
	}
};