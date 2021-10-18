class Cart { 
    constructor(){
        this.store = {};
    }

    addProduct(product){
        this.store[product.id] = product;
    }

    getProudct(id){
        return this.store[id];
    }
}

const c = new Cart();

c.addProduct({id: 1, name : '노트북'});
console.log(c.store);

const p = c.getProudct(1);
console.log(p);          
  