class Base{

    constructor(options = {}){
        if(options.list)
        this.list = this.constructor.resolveField(options.list);
        this.option = {};
        this.args = {};
        
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
        const BuildBase = {
        operation: {
            name: this.constructor.name.toLowerCase(),
            fields: Array.from(this.list)
        }
        }
        BuildBase.operation.args = this.args;
    }
    addChild(name,object){
        //파생 요소 추가.
    }
    
    static resolveField(options = []){
        if(Array.isArray(options)){
            return new Set(options.filter((type) => typeof this.TYPES[type] !== 'undefined'));
        }
        throw new Error('Options Must Be Array!');
        //error
    }
}
Base.TYPES = {};
Base.OPTION = [];
module.exports = Base;