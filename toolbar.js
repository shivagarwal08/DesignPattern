function ToolbarItem(itemElement){
    this._el = itemElement;
    itemElement.addEventListener("click", this.toggleActiveState.bind(this));

}

Object.defineProperties(ToolbarItem.prototype, {
    enabled: {
        get: function() {
            return !this._el.classList.contains("disabled");
        },
        set: function(value){
            if(value){
                this._el.classList.remove("disabled");
            }else{
                this._el.classList.add("disabled");
            }
        }
    },
    activated: {
        get: function(){
            return this._el.classList.contains("active");
        },
        set: function(value){
            if(value){
                this._el.classList.add("active");
            }else{
                this._el.classList.remove("active");
            }
        }
    }
});

ToolbarItem.prototype.toggleActiveState = function(){
    this.activated = !this.activated;
};

var createToolbarItems = function(itemElements){
    var items = [];
    [].forEach.call(itemElements, function(el, index, array){
        var item = new ToolbarItem(el);
    });
};