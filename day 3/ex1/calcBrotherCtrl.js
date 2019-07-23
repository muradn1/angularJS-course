module.controller("calcBrotherCtrl", CalcBrotherCtrl)


// DI dependency injection - IOC
function CalcBrotherCtrl($scope,$rootScope) {

    $scope.result = "";

    $scope.calcResult = () =>{
        $scope.result = $rootScope.result();
    }
}