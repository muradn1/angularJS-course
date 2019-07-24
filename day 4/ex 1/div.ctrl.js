module.controller("divCtrl", DivCtrl);

// DI dependency injection - IOC
function DivCtrl($scope, dataService, globalConst) {

    $scope.ab = dataService.ab;
    $scope.errorMessage = globalConst.errorMessage;
}
