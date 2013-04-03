describe("Is A test!", function() {	
	"use strict";

	beforeEach(function() {

	});
	
	it("isNumericFalsy", function() {
		var Falsy = ['D','XS','/','-',{},undefined,'', null];
		
		for(var i in Falsy){
			expect(SH.isNumeric(Falsy[i])).toBe(false);
		}
	});
	
	it("isNumericTruthy", function() {
		var Truthy = ['-1', '0', '0.5', '0.000000001', '100000000'];
				
		for(var j in Truthy){
			expect(SH.isNumeric(Truthy[j])).toBe(true);		
		}
	});
	
	it("isPrimitiveFalsy", function() {
		var Falsy = [{}, []];	

		for(var i in Falsy){
			expect(SH.isPrimitive(Falsy[i])).toBe(false);
		}
	});
	
	it("isPrimitiveTruthy", function() {
		var Truthy = [undefined, false, true, 0, '1', -1, '', null];
		
		for(var j in Truthy){
			expect(SH.isPrimitive(Truthy[j])).toBe(true);		
		}
	});
	
	it("isIntegerTruthy", function() {
		var ints = [0, -1, 1, 23412, -23412, -32345454545454];
		
		for(var j in ints){
			expect(SH.isInteger(ints[j])).toBe(true);		
		}
	});
	
	it("isFloatTruthy", function() {
		var ints = [-1.5, 1.01, 2341.200, -3.2345454545454];
		
		for(var j in ints){
			expect(SH.isFloat(ints[j])).toBe(true);		
		}
	});
	
	it("isNegZero", function() {
		var v = -0;
		expect(SH.isNegZero(v)).toBe(true);		
	});
	
	it('PickTest', function(){
		var result = SH.pick({a:1, b:2, c:3}, 'a', 'b');
		expect(result).toEqual({a:1, b:2});
		var Obj = function(){};
		Obj.prototype = {a: 1, b: 2, c: 3};
		expect(SH.pick(new Obj(), 'a', 'c')).toEqual({a:1, c: 3});	
	});
	
	it('OmitTest', function(){
		var result = SH.omit({a:1, b:2, c:3}, 'a', 'b');
		expect(result).toEqual({c:3});
		var Obj = function(){};
		Obj.prototype = {a: 1, b: 2, c: 3};
		expect(SH.omit(new Obj(), 'a')).toEqual({b:2, c: 3});	
	});
	
	it('FunctionInvokeTest', function(){
		var list = [[5, 1, 7], [3, 2, 1]];
		var result = SH.invoke(list, 'sort');
		expect(result[0].join(', ')).toEqual('1, 5, 7');
		expect(result[1].join(', ')).toEqual('1, 2, 3');
	});
	
	it('ArrayIntersection', function(){
		var arr1 = [1,2,3,4,5,1,5];
		var arr2 = [2,3,7,8,1];
		var result = SH.intersection(arr1, arr2);
		expect(result.join(', ')).toEqual('1, 2, 3');
	});
	
	it('CollectionReject', function(){
		var context = 'obj';
		var evens = SH.reject([1,2,3,4,5,6], function(num){expect(context).toEqual('obj'); return num % 2 !== 0;}, context);
		expect(evens.join(', ')).toEqual('2, 4, 6');	
	});
	
	it('WrapperFunction', function(){
		var fn = function(what){
			return 'I am a '+what+'.';
		};
		
		var wrapper = function(func){
			return '-who are you? +'+func(arguments[1])+' -Oh! OK';
		};

		var wrapped = SH.wrap(fn, wrapper);

		expect(wrapped('robot')).toEqual('-who are you? +I am a robot. -Oh! OK');	
	});

	it('AfterFunction', function(){
		var testAfter = function(afterAmount, timesCalled) {
			var afterCalled = 0, after = SH.after(afterAmount, function() {
				afterCalled++;
			});
			
			while (timesCalled--){
				after();
			}

			return afterCalled;
		};
		expect(testAfter(5, 5)).toEqual(1);	
		expect(testAfter(0, 0)).toEqual(1);
		expect(testAfter(5, 4)).toEqual(0);
	});

});

