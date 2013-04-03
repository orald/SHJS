//     SHJS 0.0.1
//     (c) 2012-2013 Oral Dalay
//     SHJS may be freely distributed under the MIT license.

(function(window){
	"use strict";
	
	var root = window,			
	previousSH = window.SH,
	SH = root.SH = {};
	
	// current version
	SH.VERSION = "0.0.1";	
	
	SH.noConflict = function() {
		root.SH = previousSH;
		return this;
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
	
	// implementation of UnderscoreJS _invoke
	SH.invoke = function(list, fn){
		var args = [].slice.call(arguments, 2);
		var isF = is.Function(fn);
		return list.map(function(value){
			return (isF ? fn : value[fn]).apply(value, args);
		});
	};

	// implementation of UnderscoreJS _intersection
	SH.intersection = function(base){
		var rest = [].slice.call(arguments, 1);
		
		return SH.unique(base).filter(function(value){
			return rest.every(function(r){
				return r.indexOf(value) >= 0;
			});
		});
	};
	
	// Array unique implementation
	SH.unique = function(v){
		var uniq = [];
		
		if(Array.prototype.unique){
			return v.unique();
		}else{
			v.forEach(function(el){
				if(uniq.indexOf(el) < 0){
					uniq.push(el);
				}
			});
			return uniq;			
		}
	};
	
	// implementation of UnderscoreJS _reject
	SH.reject = function(list, fn, context){
		return list.filter(function(element, index, array){
			return !fn.call(context, element, index, array);
		}, context);
	};

	//implementation of UnderscoreJS wrap function
	SH.wrap = function(func, wrapper){

		return function(){
			var args = [func];
			[].push.apply(args, arguments);
			return wrapper.apply(this, args);
		};
	};

	//implementation of UnderscoreJS after function
	SH.after = function(count, afterfn){
		if(count <= 0){
			return afterfn();
		}
		return function(){
			if(--count < 1){
				return afterfn.apply(this, arguments);
			}
		};
	};

	// NodeJS compatibility
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = SH;
		}
		exports.SH = SH;
	} else {
		root.SH = SH;
	}

})(this);
;/*! is 03-04-2013 */
(function(e){"use strict";var t=e,n={string:1,number:1,undefined:1,"boolean":1},r=e.is,o=t.is={};o.VERSION="0.0.1",o._Core={_2String:Object.prototype.toString},o._C2Type={"[object Array]":"array","[object Boolean]":"boolean","[object Date]":"date","[object Function]":"function","[object Number]":"number","[object Object]":"object","[object RegExp]":"regexp","[object String]":"string"},o.noConflict=function(){return t.is=r,this},o.typeOF=function(e){return null===e?e+"":o._C2Type[o._Core._2String.call(e)]||typeof e},o.Boolean=function(e){return"boolean"===o.typeOF(e)},o.Primitive=function(e){return typeof e in n||!e},o.Numeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},o.Integer=function(e){return"number"===o.typeOF(e)&&0===e%1},o.Float=function(e){return!isNaN(parseFloat(e))&&0!==e%1},o.Object=function(e){return e===Object(e)},o.Array=function(e){return null===e?!1:"array"===o.typeOF(e)},o.Function=function(e){return"function"==typeof e},o.NegZero=function(e){if(0!==e)return!1;var t=Object.freeze({z:-0});try{Object.defineProperty(t,"z",{value:e})}catch(n){return!1}return!0},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=o),exports.is=o):t.is=o})(this);