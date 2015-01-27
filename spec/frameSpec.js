describe("Frame", function(){
		
	var frame;

	beforeEach(function(){
		frame = new Frame();
	});

	it("should contain a rack with ten pins", function(){
		frame.rackUp();
		expect(frame.rack).toEqual(10);
	});


});