"use strict";

describe("Is A test!", function() {
	var isNumericFalsy, isNumericTruthy;
	beforeEach(function() {
		isNumericFalsy = ['D','XS','/','-',null,{},undefined,''];
		isNumericTruthy = ['-1', '0', '0.5', '0.000000001', '100000000'];
		
	});
	
	it("isNumeric", function() {
		for(var i in isNumericFalsy){
			expect(SH.isNumeric(isNumericFalsy[i])).toBe(false);
		}
		for(var j in isNumericTruthy){
			expect(SH.isNumeric(isNumericTruthy[j])).toBe(true);		
		}
	});
});

