describe ("Scorecard", function(){

	var scorecard;

	beforeEach(function(){
		scorecard = new Scorecard();
	});

	describe("Scorecard", function(){

		it("has 1 frame with 10 pins", function(){
			expect(scorecard.frame).toEqual(10);
		});

		it("points are assigned based on number of pins knocked down", function(){
			scorecard.frameScore(8);
			expect(scorecard.frame).toEqual(8)
		});

		it("maximum score of 10 per frame", function(){
			expect(scorecard.frameScore(11)).toBe("Score must be between 0..10");
		});
	});

});