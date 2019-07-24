module.controller("historyCtrl", HistoryCtrl);

// DI dependency injection - IOC
function HistoryCtrl($scope, dataService) {

    $scope.ab = dataService.ab;
    $scope.aHistory = [];
    $scope.bHistory = [];
    $scope.aHistoryStr = "";
    $scope.bHistoryStr = "";

    $scope.$watch('ab.a', function (newA, oldA) {
        $scope.aHistory.push(newA);
        $scope.aHistoryStr = $scope.aHistory.toString();
    });

    $scope.$watch('ab.b', function (newB, oldB) {
        $scope.bHistory.push(newB);
        $scope.bHistoryStr = $scope.bHistory.toString();
    });

}

