//     SHJS 0.0.1
//     (c) 2012-2013 Oral Dalay
//     SHJS may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://shjs.org

(function(window){
	"use strict";
	
	var root = window,		
		// Credits to abozhilov
		//PROTO_SUPPORT = 'proto__obj' in {__proto__ : {'proto__obj' : 1}},
		PRIMITIVES = {
			string : 1,
			number : 1,
			undefined : 1,
			boolean : 1
		},
		previousSH = window.SH,
		SH = root.SH = {};
	
	// current version
	SH.VERSION = "0.0.1";	
		
	SH._Core = { 
		'_2String' : Object.prototype.toString
	},	
	
	SH._C2Type = {
		"[object Array]" : "array",
		"[object Boolean]" : "boolean",
		"[object Date]" : "date",		
		"[object Function]" : "function",
		"[object Number]" : "number",
		"[object Object]" : "object",
		"[object RegExp]" : "regexp",			
		"[object String]" : "string"
	},

	SH.noConflict = function() {
		root.SH = previousSH;
		return this;
	};

	// return format is string
	SH.typeOF = function(v){
		return v == null?String(v):SH._C2Type[SH._Core['_2String'].call(v)] || typeof v;
	};

	SH.isPrimitive = function(v){
		return typeof v in PRIMITIVES || !v;
	};

	SH.isNumeric = function(v){
		return !isNaN(parseFloat(v)) && isFinite(v);
	};
	
	SH.isInteger = function(v){
		return SH.typeOF(v) === 'number' && v % 1 === 0;
	};
	
	SH.isFloat = function(v){
		return !isNaN(parseFloat(v)) && v % 1 !== 0;
	};
	
	SH.isObject = function(v){
		return v === Object(v);
	};
	
	SH.isNegZero = function(v){
		// return v === 0 && 1/v === -Infinity;
		
		if (v !== 0){
			return false;
		}
		var obj = Object.freeze({z:-0});
		try {
			Object.defineProperty(obj, 'z', {value:v});
		} catch (e) {return false;}
		return true;
	};
	
	// implementation of UnderscoreJS _pick
	SH.pick = function(obj){
		var newobj = {}, 
			args = [].concat([], [].slice.call(arguments, 1));	
			
		for(var i=0; i<args.length; i++){
			if(args[i] in obj){
				newobj[args[i]] = obj[args[i]];
			}
		}
		return newobj;
	};

	// implementation of UnderscoreJS _omit
	SH.omit = function(obj){
		var newobj = {}, 
			args = [].concat([], [].slice.call(arguments, 1));	
		for(var key in obj){
			if(args.indexOf(key) < 0){
				newobj[key] = obj[key];
			}
		}
		return newobj;
	};

	root.SH = SH;
	
})(this);