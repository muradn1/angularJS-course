module.controller("resultsCtrl", ResultsCtrl);

// DI dependency injection - IOC
function ResultsCtrl($scope, dataService) {
    $scope.data = dataService.data;

}

