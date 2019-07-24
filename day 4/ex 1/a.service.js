module.factory("aService", function (globalConst, dataService) {
    const result = {}

    result.get1toA = function () {
        let resultToReturn = {
            errorMessage: "",
            array:[]
        }
        if (dataService.ab.a < 1) {
            resultToReturn.errorMessage = globalConst.errorMessage;
            return resultToReturn;
        }

        for (i = 1; i <= dataService.ab.a; i++) {
            resultToReturn.array.push(i);
        }

        return resultToReturn;
    }

    return result
})