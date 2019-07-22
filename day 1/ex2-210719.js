//מוראד נסראלדין 205718182

//Create func
function CreateMobilePhone(model,size,price,number){
    let result = {};
    result.model = model;
    result.size = size;
    result.price = price;
    result.number = number;
    
    result.getNumber = () => {
        return result.number;
    }
    result.setNUmber = (number) => {
        result.number = number;
    }

    return result;
}

//ctor mode
function MobilePhone(model,size,price,number){
    this.size = size;
    this.number = number;
    let _price  = 0;
    let _model  = "";
    
    this.getNumber = function(){
        return this.number;
    }
    this.setNUmber = function(number){
        this.number = number;
    }

    this.getPrice = () => {
        return _price;
    }
    this.setPrice = (newPrice) => {
        if(typeof newPrice === "number" && newPrice === parseInt(newPrice,10) && newPrice > _price){
            _price = newPrice;
        }
    }

    this.getModel = () => {
        return _model;
    }

    this.setModel = (newModel) => {
        if(typeof newModel === "string" && newModel.length >= 4){
            _model = newModel;
        }
    }

    this.setModel(model);
    this.setPrice(price);
}

let phone1 = CreateMobilePhone("model1","size1","price1","number1");
let phone2 = new MobilePhone("model2","size2",10,"number2");

console.log(phone1);
console.log(phone2);
console.log(phone2.getModel());
console.log(phone2.getPrice());