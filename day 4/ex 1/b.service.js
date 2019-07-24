module.service("bService", function(dataService, globalConst) {
    

    this.getBto1 = function() { 
        let arrayToReturn = [];
        if (dataService.ab.b < 1) {
            return globalConst.errorMessage;
        }

        for(i=dataService.ab.b; i>=1; i--){
            arrayToReturn.push(i);
        }

        return arrayToReturn.toString();
    }
})