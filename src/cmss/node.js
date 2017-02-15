class node{

	constructor(type){
		this.type = type;
		this.selector = '';
		this.attributes = {};
		this.children = [];

		this.parentNode = null;
		this.factory = {};
		this.context = null;
		this.$context = null;

	}

	addChild(node){
		this.children.push(node);
		node.parentNode = this;
	}

	setAttribute(attrName,attrValue){
		this.attributes[attrName] = attrValue;
	}

	getFullSelector(){
		var buffer = [];
		var item = this;
		console.log(this)
		do{
			buffer.push(item.selector);
		}while(item = item.parentNode);

		return buffer.reverse().join(" "); 
	}

	getAttribute(attrName,context){
		if(!this.attributes[attrName]){
			return null;
		}
		var data = this.attributes[attrName];
		var $data = context;
		if(data[0] == node.Normal){
			var factory;
			var self = this;
		
			eval(`
				factory = function(){
					with(self.$context){
						return ${data[1]}
					}
				}
			`);
			return factory.call();
		}
		else{
			
			var self = this;
			var factory;
			eval(`
				factory = 
					function () {
						with(self.$context){
							${data[1]};
						}
					}
			;`);
			//console.error(factory.call())
			return factory.call();
		}
	}


	setContext(context){
		eval(`this.context = function($data){
		 	${context}
		}`);
	}

	initContext(context){
		if(this.$context){
			return;
		}
		if(!this.context){
			this.$context = this.parentNode? this.parentNode.$context : {};
		}
		else{
			eval(`
				this.$context = ${this.context}(context)
			`);
			if(this.parentNode){
				for(var i in this.parentNode.$context){
					if(this.$context[i]) continue;

					this.$context[i] = this.parentNode.$context[i];
				}
			}
			//this.$context = this.context.call(null,context);
		}
	}
};

node.Root = 0;
node.Normal = 1;
node.Code = 2;

module.exports = node;