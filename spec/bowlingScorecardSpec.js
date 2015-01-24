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

		it("takes a max of 10 frames per player", function(){
			expect(scorecard.frameTotal).toEqual(10);
		});

		it("after frame a player has 1 less frame to play", function(){
			scorecard.frameScore(10);
			scorecard.frameScore(10);
			expect(scorecard.frameTotal).toEqual(8);
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

		it("points are added over a number of frames", function(){
			scorecard.frameScore(10);
			scorecard.frameScore(8);
			expect(scorecard.pointsTally).toEqual(18);
		});

	});

	// describe("Strikes", function(){

	// 	it("are achieved if 10 pins knocked down on first throw", function(){
	// 		expect(scorecard.throwCount).toEqual(2);
	// 		scorecard.frameScore(10);
	// 		expect(scorecard.pointsTally).toEqual
	// 	});
	// });

	// describe ("Player", function(){

	// 	it("should take turns", function(){
	// 		expect(scorecard.turns).toEqual();
	// 	});

	// });

});