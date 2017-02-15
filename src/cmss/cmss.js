const domready = require('./domready');
const Parser = require("./parser");
const Node = require('./node');

var Cmss = {
	walk : function(node,callback){
		var stack = [node];
		var target;
		while(stack.length){
			target = stack.shift();

			if(target.children.length){
				target.children.forEach(function(node){
					stack.push(node);
				});
			}

			if(target.type === Node.Root){
				console.dir(stack)
				continue;
			}


			callback.call(null,target);
		}

		
	},

	scan : function(domNode){
		var html = domNode.innerText;
		var parser = new Parser(html);
		var ast = parser.parse();
		Cmss.walk(ast,function(node){
			var selector = node.getFullSelector();

			var elems = document.querySelectorAll(selector);
			console.log(selector)
			console.log(elems);

		});


		console.log(ast)
	},

	bootstrap : function(){
		domready(function(){
			var elems = document.querySelectorAll("script[type='text/cmss']");
			for(var i = 0; i < elems.length; i++){
				Cmss.scan(elems[i])
			}

		});
	}
}

global.Cmss = Cmss;