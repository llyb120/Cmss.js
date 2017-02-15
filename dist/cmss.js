/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.4.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4),
    core = __webpack_require__(0),
    hide = __webpack_require__(24),
    redefine = __webpack_require__(60),
    ctx = __webpack_require__(21),
    PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
      key,
      own,
      out,
      exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(12),
    defined = __webpack_require__(5);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(5);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11),
    IE8_DOM_DEFINE = __webpack_require__(25),
    toPrimitive = __webpack_require__(32),
    dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys'),
    uid = __webpack_require__(17);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    arg ? method.call(null, function () {}, 1) : method.call(null);
  });
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil,
    floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var id = 0,
    px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8),
    toLength = __webpack_require__(31),
    toIndex = __webpack_require__(64);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this),
        length = toLength(O.length),
        index = toIndex(fromIndex, length),
        value;
    // Array#includes uses SameValueZero equality algorithm
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
      // Array#toIndex ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(21),
    IObject = __webpack_require__(12),
    toObject = __webpack_require__(9),
    toLength = __webpack_require__(31),
    asc = __webpack_require__(50);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1,
      IS_FILTER = TYPE == 2,
      IS_SOME = TYPE == 3,
      IS_EVERY = TYPE == 4,
      IS_FIND_INDEX = TYPE == 6,
      NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
      create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this),
        self = IObject(O),
        f = ctx(callbackfn, that, 3),
        length = toLength(self.length),
        index = 0,
        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
        val,
        res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    document = __webpack_require__(4).document
// in old IE typeof document.createElement is 'object'
,
    is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13),
    createDesc = __webpack_require__(29);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(59),
    enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(1),
    core = __webpack_require__(0),
    fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY],
      exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4),
    SHARED = '__core-js_shared__',
    store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16),
    min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var node = function () {
	function node(type) {
		_classCallCheck(this, node);

		this.type = type;
		this.selector = '';
		this.attributes = {};
		this.children = [];

		this.parentNode = null;
		this.factory = {};
		this.context = null;
		this.$context = null;
	}

	node.prototype.addChild = function addChild(node) {
		this.children.push(node);
		node.parentNode = this;
	};

	node.prototype.setAttribute = function setAttribute(attrName, attrValue) {
		this.attributes[attrName] = attrValue;
	};

	node.prototype.getFullSelector = function getFullSelector() {
		var buffer = [];
		var item = this;
		console.log(this);
		do {
			buffer.push(item.selector);
		} while (item = item.parentNode);

		return buffer.reverse().join(" ");
	};

	node.prototype.getAttribute = function getAttribute(attrName, context) {
		if (!this.attributes[attrName]) {
			return null;
		}
		var data = this.attributes[attrName];
		var $data = context;
		if (data[0] == node.Normal) {
			var factory;
			var self = this;

			eval("\n\t\t\t\tfactory = function(){\n\t\t\t\t\twith(self.$context){\n\t\t\t\t\t\treturn " + data[1] + "\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t");
			return factory.call();
		} else {

			var self = this;
			var factory;
			eval("\n\t\t\t\tfactory = \n\t\t\t\t\tfunction () {\n\t\t\t\t\t\twith(self.$context){\n\t\t\t\t\t\t\t" + data[1] + ";\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t;");
			//console.error(factory.call())
			return factory.call();
		}
	};

	node.prototype.setContext = function setContext(context) {
		eval("this.context = function($data){\n\t\t \t" + context + "\n\t\t}");
	};

	node.prototype.initContext = function initContext(context) {
		if (this.$context) {
			return;
		}
		if (!this.context) {
			this.$context = this.parentNode ? this.parentNode.$context : {};
		} else {
			eval("\n\t\t\t\tthis.$context = " + this.context + "(context)\n\t\t\t");
			if (this.parentNode) {
				for (var i in this.parentNode.$context) {
					if (this.$context[i]) continue;

					this.$context[i] = this.parentNode.$context[i];
				}
			}
			//this.$context = this.context.call(null,context);
		}
	};

	return node;
}();

;

node.Root = 0;
node.Normal = 1;
node.Code = 2;

module.exports = node;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(43);
__webpack_require__(42);
__webpack_require__(45);
__webpack_require__(44);
__webpack_require__(38);
__webpack_require__(40);
__webpack_require__(47);
__webpack_require__(46);
__webpack_require__(39);

__webpack_require__(76);

Cmss.bootstrap();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {

module.exports = function ini_get(varname) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/ini_get/
  // original by: Brett Zamir (http://brett-zamir.me)
  //      note 1: The ini values must be set by ini_set or manually within an ini file
  //   example 1: ini_set('date.timezone', 'Asia/Hong_Kong')
  //   example 1: ini_get('date.timezone')
  //   returns 1: 'Asia/Hong_Kong'

  var $global = typeof window !== 'undefined' ? window : global;
  $global.$locutus = $global.$locutus || {};
  var $locutus = $global.$locutus;
  $locutus.php = $locutus.php || {};
  $locutus.php.ini = $locutus.php.ini || {};

  if ($locutus.php.ini[varname] && $locutus.php.ini[varname].local_value !== undefined) {
    if ($locutus.php.ini[varname].local_value === null) {
      return '';
    }
    return $locutus.php.ini[varname].local_value;
  }

  return '';
};
//# sourceMappingURL=ini_get.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {

module.exports = function ini_set(varname, newvalue) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/ini_set/
  // original by: Brett Zamir (http://brett-zamir.me)
  //      note 1: This will not set a global_value or access level for the ini item
  //   example 1: ini_set('date.timezone', 'Asia/Hong_Kong')
  //   example 1: ini_set('date.timezone', 'America/Chicago')
  //   returns 1: 'Asia/Hong_Kong'

  var $global = typeof window !== 'undefined' ? window : global;
  $global.$locutus = $global.$locutus || {};
  var $locutus = $global.$locutus;
  $locutus.php = $locutus.php || {};
  $locutus.php.ini = $locutus.php.ini || {};

  $locutus.php.ini = $locutus.php.ini || {};
  $locutus.php.ini[varname] = $locutus.php.ini[varname] || {};

  var oldval = $locutus.php.ini[varname].local_value;

  var lowerStr = (newvalue + '').toLowerCase().trim();
  if (newvalue === true || lowerStr === 'on' || lowerStr === '1') {
    newvalue = 'on';
  }
  if (newvalue === false || lowerStr === 'off' || lowerStr === '0') {
    newvalue = 'off';
  }

  var _setArr = function _setArr(oldval) {
    // Although these are set individually, they are all accumulated
    if (typeof oldval === 'undefined') {
      $locutus.ini[varname].local_value = [];
    }
    $locutus.ini[varname].local_value.push(newvalue);
  };

  switch (varname) {
    case 'extension':
      _setArr(oldval, newvalue);
      break;
    default:
      $locutus.php.ini[varname].local_value = newvalue;
      break;
  }

  return oldval;
};
//# sourceMappingURL=ini_set.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

module.exports = function is_array(mixedVar) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/is_array/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Legaev Andrey
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Nathan Sepulveda
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Cord
  // bugfixed by: Manish
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      note 1: In Locutus, javascript objects are like php associative arrays,
  //      note 1: thus JavaScript objects will also
  //      note 1: return true in this function (except for objects which inherit properties,
  //      note 1: being thus used as objects),
  //      note 1: unless you do ini_set('locutus.objectsAsArrays', 0),
  //      note 1: in which case only genuine JavaScript arrays
  //      note 1: will return true
  //   example 1: is_array(['Kevin', 'van', 'Zonneveld'])
  //   returns 1: true
  //   example 2: is_array('Kevin van Zonneveld')
  //   returns 2: false
  //   example 3: is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'})
  //   returns 3: true
  //   example 4: ini_set('locutus.objectsAsArrays', 0)
  //   example 4: is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'})
  //   returns 4: false
  //   example 5: is_array(function tmp_a (){ this.name = 'Kevin' })
  //   returns 5: false

  var _getFuncName = function _getFuncName(fn) {
    var name = /\W*function\s+([\w\$]+)\s*\(/.exec(fn);
    if (!name) {
      return '(Anonymous)';
    }
    return name[1];
  };
  var _isArray = function _isArray(mixedVar) {
    // return Object.prototype.toString.call(mixedVar) === '[object Array]';
    // The above works, but let's do the even more stringent approach:
    // (since Object.prototype.toString could be overridden)
    // Null, Not an object, no length property so couldn't be an Array (or String)
    if (!mixedVar || (typeof mixedVar === 'undefined' ? 'undefined' : _typeof(mixedVar)) !== 'object' || typeof mixedVar.length !== 'number') {
      return false;
    }
    var len = mixedVar.length;
    mixedVar[mixedVar.length] = 'bogus';
    // The only way I can think of to get around this (or where there would be trouble)
    // would be to have an object defined
    // with a custom "length" getter which changed behavior on each call
    // (or a setter to mess up the following below) or a custom
    // setter for numeric properties, but even that would need to listen for
    // specific indexes; but there should be no false negatives
    // and such a false positive would need to rely on later JavaScript
    // innovations like __defineSetter__
    if (len !== mixedVar.length) {
      // We know it's an array since length auto-changed with the addition of a
      // numeric property at its length end, so safely get rid of our bogus element
      mixedVar.length -= 1;
      return true;
    }
    // Get rid of the property we added onto a non-array object; only possible
    // side-effect is if the user adds back the property later, it will iterate
    // this property in the older order placement in IE (an order which should not
    // be depended on anyways)
    delete mixedVar[mixedVar.length];
    return false;
  };

  if (!mixedVar || (typeof mixedVar === 'undefined' ? 'undefined' : _typeof(mixedVar)) !== 'object') {
    return false;
  }

  var isArray = _isArray(mixedVar);

  if (isArray) {
    return true;
  }

  var iniVal = ( true ? __webpack_require__(35)('locutus.objectsAsArrays') : undefined) || 'on';
  if (iniVal === 'on') {
    var asString = Object.prototype.toString.call(mixedVar);
    var asFunc = _getFuncName(mixedVar.constructor);

    if (asString === '[object Object]' && asFunc === 'Object') {
      // Most likely a literal and intended as assoc. array
      return true;
    }
  }

  return false;
};
//# sourceMappingURL=is_array.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
module.exports = __webpack_require__(0).Array.forEach;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
module.exports = __webpack_require__(0).Array.indexOf;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
module.exports = __webpack_require__(0).Array.map;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
module.exports = __webpack_require__(0).String.repeat;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(0).String.trim;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isArray = __webpack_require__(52),
    SPECIES = __webpack_require__(65)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(49);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4).document && document.documentElement;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(26),
    gOPS = __webpack_require__(57),
    pIE = __webpack_require__(27),
    toObject = __webpack_require__(9),
    IObject = __webpack_require__(12),
    $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {},
      B = {},
      S = Symbol(),
      K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target),
      aLen = arguments.length,
      index = 1,
      getSymbols = gOPS.f,
      isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]),
        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
        length = keys.length,
        j = 0,
        key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11),
    dPs = __webpack_require__(55),
    enumBugKeys = __webpack_require__(23),
    IE_PROTO = __webpack_require__(14)('IE_PROTO'),
    Empty = function Empty() {/* empty */},
    PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(22)('iframe'),
      i = enumBugKeys.length,
      lt = '<',
      gt = '>',
      iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(51).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13),
    anObject = __webpack_require__(11),
    getKeys = __webpack_require__(26);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties),
      length = keys.length,
      i = 0,
      P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27),
    createDesc = __webpack_require__(29),
    toIObject = __webpack_require__(8),
    toPrimitive = __webpack_require__(32),
    has = __webpack_require__(6),
    IE8_DOM_DEFINE = __webpack_require__(25),
    gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6),
    toObject = __webpack_require__(9),
    IE_PROTO = __webpack_require__(14)('IE_PROTO'),
    ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6),
    toIObject = __webpack_require__(8),
    arrayIndexOf = __webpack_require__(18)(false),
    IE_PROTO = __webpack_require__(14)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object),
      i = 0,
      result = [],
      key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4),
    hide = __webpack_require__(24),
    has = __webpack_require__(6),
    SRC = __webpack_require__(17)('src'),
    TO_STRING = 'toString',
    $toString = Function[TO_STRING],
    TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(0).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else {
    if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else {
      if (O[key]) O[key] = val;else hide(O, key, val);
    }
  }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


var toInteger = __webpack_require__(16),
    defined = __webpack_require__(5);

module.exports = function repeat(count) {
  var str = String(defined(this)),
      res = '',
      n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }return res;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1),
    defined = __webpack_require__(5),
    fails = __webpack_require__(3),
    spaces = __webpack_require__(63),
    space = '[' + spaces + ']',
    non = '\u200B\x85',
    ltrim = RegExp('^' + space + space + '*'),
    rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16),
    max = Math.max,
    min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(30)('wks'),
    uid = __webpack_require__(17),
    _Symbol = __webpack_require__(4).Symbol,
    USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


var $export = __webpack_require__(1),
    $forEach = __webpack_require__(19)(0),
    STRICT = __webpack_require__(15)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


var $export = __webpack_require__(1),
    $indexOf = __webpack_require__(18)(false),
    $native = [].indexOf,
    NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(15)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


var $export = __webpack_require__(1),
    $map = __webpack_require__(19)(1);

$export($export.P + $export.F * !__webpack_require__(15)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(1);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(53) });

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(54) });

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(13).f });

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(8),
    $getOwnPropertyDescriptor = __webpack_require__(56).f;

__webpack_require__(28)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(9),
    $getPrototypeOf = __webpack_require__(58);

__webpack_require__(28)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(61)
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


// 21.1.3.25 String.prototype.trim()
__webpack_require__(62)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var domready = __webpack_require__(77);
var Parser = __webpack_require__(78);
var Node = __webpack_require__(33);
var is_array = __webpack_require__(37);
var ini_set = __webpack_require__(36);

var Cmss = {
	walk: function walk(node, callback) {
		var stack = [node];
		var target;
		while (stack.length) {
			target = stack.shift();

			if (target.children.length) {
				target.children.forEach(function (node) {
					stack.push(node);
				});
			}

			if (target.type === Node.Root) {
				console.dir(stack);
				continue;
			}

			callback.call(null, target);
		}
	},

	syncElement: function syncElement(node) {
		var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		node.initContext(context);

		console.log('context is', context);
		var data = node.getAttribute('data', context) || context;
		context = data;
		var elems = (element || document).querySelectorAll(node.selector);

		var renderNode = function renderNode(target, context) {
			for (var attrName in node.attributes) {
				//console.log('name is' + attrName)
				if (attrName == 'data') continue;
				var attrValue = node.getAttribute(attrName, context);
				switch (attrName) {
					case 'text':
						target.innerText = attrValue;
						break;

					case 'before':
						if (target.firstChild) {
							if (target.firstChild.nodeType == 3) {
								target.firstChild.nodeValue = attrValue;
							} else {
								console.warn(target.firstChild);
								var textNode = document.createTextNode(attrValue);
								target.insertBefore(textNode, target.firstChild);
							}
						} else {
							target.innerText = attrValue;
						}
						break;

					case 'after':
						if (target.lastChild) {
							if (target.lastChild.nodeType == 3) {
								target.lastChild.nodeValue = attrValue;
							} else {
								var textNode = document.createTextNode(attrValue);
								target.appendChild(textNode);
							}
						} else {
							target.innerText = attrValue;
						}
						break;

					default:
						target.setAttribute(attrName, attrValue);

				}
			}
		};

		if (is_array(data)) {
			if (!elems.length) {
				return;
			}

			var sign = elems[0].parentNode.insertBefore(document.createComment(""), elems[0]);
			var model = elems[0].cloneNode(true);
			for (var i = 0; i < elems.length; i++) {
				try {
					elems[i].parentNode.removeChild(elems[i]);
				} catch (e) {};
			}

			for (var i = 0; i < data.length; i++) {
				var target = model.cloneNode(true);
				renderNode(target, data[i]);
				sign.parentNode.insertBefore(target, sign);

				node.children.forEach(function (child) {
					Cmss.syncElement(child, target, data[i]);
				});
			}
		} else {
			for (var i = 0; i < elems.length; i++) {
				renderNode(elems[i], context);
			}
			// console.warn(element)
			// if(element){
			// 	renderNode(element);
			// }
		}
	},

	scan: function scan(domNode) {
		var html = domNode.innerHTML;
		var parser = new Parser(html);
		var ast = parser.parse();
		ast.initContext();
		ast.children.forEach(function (node) {
			Cmss.syncElement(node);
		});

		console.log(ast);
	},

	bootstrap: function bootstrap() {
		ini_set('locutus.objectsAsArrays', 0);
		domready(function () {
			var elems = document.querySelectorAll("script[type='text/cmss']");
			for (var i = 0; i < elems.length; i++) {
				Cmss.scan(elems[i]);
			}
		});
	}
};

global.Cmss = Cmss;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 77 */
/***/ (function(module, exports) {



var document = window.document;
var fns = [];
var args = [];
var isReady = false;
var errorHandler = null;

/**
 * Call a ready handler
 * @private
 * @param {function} fn
 */
var call = function call(fn) {
    try {
        // call function
        fn.apply(this, args);
    } catch (e) {
        try {
            console.error(e);
        } catch (e) {}

        // error occured while executing function
        if (errorHandler !== null) {
            errorHandler.call(this, e);
        }
    }
};

/**
 * Call all ready handlers
 * @private
 */
var run = function run() {
    var x;

    isReady = true;

    // call all registered functions
    for (x = 0; x < fns.length; x = x + 1) {
        call(fns[x]);
    }

    // clear handlers
    fns = [];
};

/**
 * Initialize
 * @private
 */
var init = function init() {
    if (window.addEventListener) {
        // for all browsers except IE
        document.addEventListener('DOMContentLoaded', function () {
            run();
        }, false);
    } else {
        // for IE
        // code taken from http://javascript.nwbox.com/IEContentLoaded/
        var poll = function poll() {
            // check IE's proprietary DOM members
            if (!document.uniqueID && document.expando) {
                return;
            }

            // you can create any tagName, even customTag like <document :ready />
            var tempNode = document.createElement('document:ready');

            try {
                // see if it throws errors until after ondocumentready
                tempNode.doScroll('left');

                // call run
                run();
            } catch (e) {
                window.setTimeout(poll, 10);
            }
        };

        // trying to always fire before onload
        document.onreadystatechange = function () {
            if (document.readyState === 'complete') {
                document.onreadystatechange = null;
                run();
            }
        };

        poll();
    }
};

/**
 * @namespace domReady
 *
 * @public
 * @param {function} fn
 * @return {domReady}
 */
var domReady = function domReady(fn) {
    return domReady.on(fn);
};

/**
 * Add code or function to execute when the DOM is ready
 * @public
 * @param {function} fn
 * @return {domReady}
 */
domReady.on = function (fn) {
    // call imediately when DOM is already ready
    if (isReady) {
        call(fn);
    } else {
        // add to the list
        fns[fns.length] = fn;
    }

    return this;
};

/**
 * Set params that will be passed to every ready handler
 * @public
 * @param {Array.<*>} params
 * @return {domReady}
 */
domReady.params = function (params) {
    args = params;
    return this;
};

/**
 * Set error callback
 * @public
 * @param {function([Error|string])} fn
 * @return {domReady}
 */
domReady.error = function (fn) {
    errorHandler = fn;
    return this;
};

// initialize
init();

// make global
module.exports = domReady;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = __webpack_require__(33);

var NORMAL = 0;
var WAIT_ATTR_VALUE = 1;

var Parser = function () {
	function Parser(content) {
		_classCallCheck(this, Parser);

		this.content = content;
		this.init();
	}

	Parser.prototype.init = function init() {
		this.length = this.content.length;
		this.ptr = 0;
		this.current = NORMAL;
		this.context = null;
		this.stack = [];
		this.buffer = [];
		this.attrName = '';
	};

	Parser.prototype.parse = function parse() {
		var char;
		var root = new Node(Node.Root);
		this.stack.push(root);

		while (char = this.readChar()) {
			switch (char) {
				case '{':
					this.blockLeft();
					break;

				case '}':
					this.blockRight();
					break;

				case '[':
					this.midBlodkLeft();
					break;

				case ':':
					this.colon();
					break;

				case '\n':
					this.changeLine();
					break;

				default:
					this.buffer.push(char);
			}

			this.moveNext();
		}

		console.error(root.children);
		return root;
	};

	Parser.prototype.readChar = function readChar() {
		if (this.ptr > this.length) {
			return null;
		}
		return this.content.charAt(this.ptr);
	};

	Parser.prototype.moveNext = function moveNext() {
		this.ptr++;
	};

	Parser.prototype.getTop = function getTop() {
		return this.stack.length ? this.stack[this.stack.length - 1] : null;
	};

	Parser.prototype.getString = function getString() {
		var str = this.buffer.join("").trim();
		this.buffer = [];
		return str;
	};

	Parser.prototype.blockLeft = function blockLeft() {
		var str = this.buffer.join('').trim();
		if (this.current == NORMAL && str.length) {
			this.context = new Node(Node.Normal);
			this.context.selector = this.getString();
			this.getTop().addChild(this.context);
			this.stack.push(this.context);
		} else if (str.length == 0) {
			this.moveNext();
			var count = 1;
			var char;
			while (char = this.readChar()) {
				this.moveNext();

				if (char == '{') {
					count++;
				} else if (char == '}') {
					if (--count == 0) {
						this.getTop().setContext(this.getString());
						this.current = NORMAL;
						break;
					}
				}
				this.buffer.push(char);
			}
		} else if (this.current == WAIT_ATTR_VALUE) {
			this.moveNext();
			var count = 1;
			var char;
			while (char = this.readChar()) {
				this.moveNext();

				if (char == '{') {
					count++;
				} else if (char == '}') {
					if (--count == 0) {
						this.getTop().setAttribute(this.attrName, [Node.Code, this.getString()]);
						this.current = NORMAL;
						break;
					}
				}
				this.buffer.push(char);
			}
		}
	};

	Parser.prototype.blockRight = function blockRight() {
		this.stack.pop();
	};

	Parser.prototype.midBlodkLeft = function midBlodkLeft() {
		if (this.buffer.join('').trim().length == 0 && this.current == WAIT_ATTR_VALUE) {
			this.moveNext();
			var count = 1;
			var char;
			while (char = this.readChar()) {
				this.moveNext();

				if (char == '[') {
					count++;
				} else if (char == ']') {
					if (--count == 0) {
						this.getTop().setAttribute(this.attrName, [Node.Normal, '[' + this.getString() + ']']);
						this.current = NORMAL;
						break;
					}
				}
				this.buffer.push(char);
			}
		} else {
			this.buffer.push(this.readChar());
		}
	};

	Parser.prototype.colon = function colon() {
		if (this.current == NORMAL) {
			this.attrName = this.getString();
			this.current = WAIT_ATTR_VALUE;
		}
	};

	Parser.prototype.changeLine = function changeLine() {
		if (this.current == WAIT_ATTR_VALUE) {
			this.getTop().setAttribute(this.attrName, [Node.Normal, this.getString()]);
			this.current = NORMAL;
		}
	};

	return Parser;
}();

module.exports = Parser;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ })
/******/ ]);