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
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
/******/ })
/************************************************************************/
/******/ ({

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),

/***/ 20:
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

/***/ 40:
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

		console.log(buffer);

		return buffer.reverse().join(" ");
	};

	return node;
}();

;

node.Root = 0;
node.Normal = 1;
node.Code = 2;

module.exports = node;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);

Cmss.bootstrap();

/***/ }),

/***/ 5:
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

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var domready = __webpack_require__(20);
var Parser = __webpack_require__(98);
var Node = __webpack_require__(40);

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

	scan: function scan(domNode) {
		var html = domNode.innerText;
		var parser = new Parser(html);
		var ast = parser.parse();
		Cmss.walk(ast, function (node) {
			var selector = node.getFullSelector();

			var elems = document.querySelectorAll(selector);
			console.log(selector);
			console.log(elems);
		});

		console.log(ast);
	},

	bootstrap: function bootstrap() {
		domready(function () {
			var elems = document.querySelectorAll("script[type='text/cmss']");
			for (var i = 0; i < elems.length; i++) {
				Cmss.scan(elems[i]);
			}
		});
	}
};

global.Cmss = Cmss;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = __webpack_require__(40);

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
		if (this.current == NORMAL) {
			this.context = new Node(Node.Normal);
			this.context.selector = this.getString();
			this.getTop().addChild(this.context);
			this.stack.push(this.context);
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

	Parser.prototype.colon = function colon() {
		if (this.current == NORMAL) {
			this.attrName = this.getString();
			this.current = WAIT_ATTR_VALUE;
		}
	};

	Parser.prototype.changeLine = function changeLine() {
		if (this.current == WAIT_ATTR_VALUE) {
			this.getTop().setAttribute([Node.Normal, this.attrName, this.getString()]);
			this.current = NORMAL;
		}
	};

	return Parser;
}();

module.exports = Parser;

/***/ })

/******/ });