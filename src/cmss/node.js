class node{

	constructor(type){
		this.type = type;
		this.selector = '';
		this.attributes = {};
		this.children = [];

		this.parentNode = null;

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

		console.log(buffer)

		return buffer.reverse().join(" "); 
	}
};

node.Root = 0;
node.Normal = 1;
node.Code = 2;

module.exports = node;