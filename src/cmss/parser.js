const Node = require('./node');

const NORMAL = 0;
const WAIT_ATTR_VALUE = 1;


class Parser{
	constructor(content){
		this.content = content;
		this.init();
	}

	init(){
		this.length = this.content.length;
		this.ptr = 0;
		this.current = NORMAL;
		this.context = null;
		this.stack = [];
		this.buffer = [];
		this.attrName = '';

	}

	parse(){
		var char;
		var root = new Node(Node.Root);
		this.stack.push(root);

		while(char = this.readChar()){
			switch(char){
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
	}

	readChar(){
		if(this.ptr > this.length){
			return null;
		}
		return this.content.charAt(this.ptr);
	}

	moveNext(){
		this.ptr++;
	}

	getTop(){
		return this.stack.length ? this.stack[this.stack.length - 1] : null;
	}

	getString(){
		var str = this.buffer.join("").trim();
		this.buffer = [];
		return str;
	}

	blockLeft(){
		if(this.current == NORMAL){
			this.context = new Node(Node.Normal);
			this.context.selector = this.getString();
			this.getTop().addChild(this.context);
			this.stack.push(this.context);
		}
		else if(this.current == WAIT_ATTR_VALUE){
			this.moveNext();
			var count = 1;
			var char;
			while(char = this.readChar()){
				this.moveNext();

				if(char == '{'){
					count++;
				}
				else if(char == '}'){
					if(--count == 0){
						this.getTop().setAttribute(this.attrName,[Node.Code,this.getString()]);
						this.current = NORMAL;
						break;
					}
				}
				this.buffer.push(char);
			}
		}
	}

	blockRight(){
		this.stack.pop();	
	}

	colon(){
		if(this.current == NORMAL){
			this.attrName = this.getString();
			this.current = WAIT_ATTR_VALUE;
		}
	}

	changeLine(){
		if(this.current == WAIT_ATTR_VALUE){
			this.getTop().setAttribute([Node.Normal,this.attrName,this.getString()]);
			this.current = NORMAL;
		}
	}


}

module.exports = Parser;