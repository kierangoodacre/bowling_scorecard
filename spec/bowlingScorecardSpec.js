describe ("Scorecard", function(){

	var scorecard;

	beforeEach(function(){
		scorecard = new Scorecard();
	});

	describe("Frames & Pins", function(){

		it("has 1 frame with 10 pins", function(){
			expect(scorecard.frame).toEqual(10);
		});

		it("points are assigned based on number of pins knocked down", function(){
			scorecard.frameScore(8);
			expect(scorecard.frame).toEqual(8)
		});

		it("maximum score of 10 pins per frame", function(){
			expect(scorecard.frameScore(11)).toBe("Score must be between 0..10");
			expect(scorecard.frame).toEqual(10);
		});

		it("Takes a max of 10 frame per player", function(){
			expect(scorecard.frameTotal).toEqual(10);
		});
	});

	describe("Throws per frame", function(){

		it("Max of two", function(){
			expect(scorecard.throwCount).toEqual(2);
		});

		it("End of frame if all pins knocked down", function(){
			scorecard.frameScore(10);
			expect(scorecard.throwCount).toEqual(0);
		});

	});

	describe("Points Tally", function(){

		it("points are added based on pins knocked down", function(){
			scorecard.frameScore(10);
			expect(scorecard.pointsTally).toEqual(10);
		});

	});

	// describe ("Player", function(){

	// 	it("should take turns", function(){
	// 		expect(scorecard.turns).toEqual();
	// 	});

	// });

});