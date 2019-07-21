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
    this.model = model;
    this.size = size;
    this.price = price;
    this.number = number;
    
    this.getNumber = function(){
        return this.number;
    }
    this.setNUmber = function(number){
        this.number = number;
    }
}

let phone1 = CreateMobilePhone("model1","size1","price1","number1");
let phone2 = new MobilePhone("model2","size2","price2","number2");

console.log(phone1);
console.log(phone2);