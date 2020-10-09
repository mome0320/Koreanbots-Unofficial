class Base{

    constructor(require,...options){
        this.list = this.constructor.resolveField(...options);
        this.require = require;
        this.child = {};
        //children
    }
    add(...element){
        for(const type of element){
        if(Base.TYPES.includes(type)) this.list.add(type);
        }
        return this;
    }
    remove(...element){
        for(const type of element){
            this.list.remove(type);
            }
        return this;
    }
    freeze(){
        return Object.freeze(this);
    }
    serialize(){

    }
    build(){
        return{
        operation: {
            name: this.constructor.name.toLowerCase(),
            fields: Array.from(this.list)
        }
        }
    }
    addChild(name,object){
        //파생 요소 추가.
    }
    
    static resolveField(options = []){
        if(Array.isArray(options)){
            return new Set(options.filter((type) => typeof this.TYPES[type] !== 'undefined'));
        }
        //error
    }
}
Base.TYPES = {};
Base.Search = [];
module.exports = Base;