const domready = require('./domready');
const Parser = require("./parser");
const Node = require('./node');
const is_array = require('locutus/php/var/is_array');
const ini_set = require('locutus/php/info/ini_set')

var Cmss = {
	walk: function (node, callback) {
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
				console.dir(stack)
				continue;
			}


			callback.call(null, target);
		}


	},

	syncElement: function (node, element = null,context = {}) {
		node.initContext(context);


		console.log('context is' ,context)
		var data = node.getAttribute('data',context) || context;
		context = data;
		var elems = (element || document).querySelectorAll(node.selector);


		var renderNode = function (target,context) {
			for (var attrName in node.attributes) {
				//console.log('name is' + attrName)
				if (attrName == 'data') continue;
				var attrValue = node.getAttribute(attrName,context);
				switch(attrName){
					case 'text':
						target.innerText = attrValue;
						break;

					case 'before':
						if(target.firstChild){
							if(target.firstChild.nodeType == 3){
								target.firstChild.nodeValue = attrValue;
							}
							else{
								console.warn(target.firstChild)
								var textNode = document.createTextNode(attrValue);
								target.insertBefore(textNode,target.firstChild);
							}
						}
						else{
							target.innerText = attrValue;
						}
						break;

					case 'after':
						if(target.lastChild){
							if(target.lastChild.nodeType == 3){
								target.lastChild.nodeValue = attrValue;
							}
							else{
								var textNode = document.createTextNode(attrValue);
								target.appendChild(textNode)
							}
						}
						else{
							target.innerText = attrValue
						}
						break;

					default:
						target.setAttribute(attrName,attrValue);

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
				}
				catch (e) { };
			}

			
			for (var i = 0; i < data.length; i++) {
				var target = model.cloneNode(true);
				renderNode(target,data[i]);
				sign.parentNode.insertBefore(target, sign);
				
				node.children.forEach((child) => {
					Cmss.syncElement(child, target,data[i])
				});
			}
		}
		else {
			for (var i = 0; i < elems.length; i++) {
				renderNode(elems[i],context);
			}
			// console.warn(element)
			// if(element){
			// 	renderNode(element);
			// }
		}

	},

	scan: function (domNode) {
		var html = domNode.innerHTML;
		var parser = new Parser(html);
		var ast = parser.parse();
		ast.initContext();
		ast.children.forEach(function (node) {
			Cmss.syncElement(node);
		});


		console.log(ast)
	},

	bootstrap: function () {
		ini_set('locutus.objectsAsArrays', 0)
		domready(function () {
			var elems = document.querySelectorAll("script[type='text/cmss']");
			for (var i = 0; i < elems.length; i++) {
				Cmss.scan(elems[i])
			}

		});
	}
}

global.Cmss = Cmss;