"use strict";

describe("Is A test!", function() {
	var Falsy, Truthy;
	
	beforeEach(function() {

	});
	
	it("isNumericFalsy", function() {
		Falsy = ['D','XS','/','-',{},undefined,''];
		
		for(var i in Falsy){
			expect(SH.isNumeric(Falsy[i])).toBe(false);
		}
	});
	
	it("isNumericTruthy", function() {
		Truthy = ['-1', '0', '0.5', '0.000000001', '100000000'];
				
		for(var j in Truthy){
			expect(SH.isNumeric(Truthy[j])).toBe(true);		
		}
	});
	
	it("isPrimitiveFalsy", function() {
		var n = new String(),
			r = new RegExp(),
			d = new Date(),
			b = new Boolean();
			
		Falsy = [{}, [], n, r, d, b];		
		for(var i in Falsy){
			expect(SH.isPrimitive(Falsy[i])).toBe(false);
		}
	});
	
	it("isPrimitiveTruthy", function() {
		Truthy = [undefined, false, true, 0, '1', -1, '', null];
		
		for(var j in Truthy){
			expect(SH.isPrimitive(Truthy[j])).toBe(true);		
		}
	});
	
});

