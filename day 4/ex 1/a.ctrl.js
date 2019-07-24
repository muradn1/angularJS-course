module.controller("aCtrl", ACtrl);

// DI dependency injection - IOC
function ACtrl($scope, aService) {
    $scope.str1ToA = "";

    $scope.print1toA = () => {
        let {errorMessage, array} = aService.get1toA();
        $scope.errorMessage = errorMessage;
        $scope.array1ToA = array;
    };
}

