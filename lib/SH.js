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
		return SH.typeOF(v) === 'number' && !isNaN(v);
	};
	
	SH.isObject = function(v){
		return v === Object(v);
	};

	root.SH = SH;
	
})(this);
