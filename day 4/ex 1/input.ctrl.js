module.controller("inputCtrl", InputCtrl);

// DI dependency injection - IOC
function InputCtrl($scope, dataService) {

    $scope.ab = dataService.ab;
}

