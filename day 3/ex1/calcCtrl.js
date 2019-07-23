
// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("calcCtrl", CalcCtrl)


// DI dependency injection - IOC
function CalcCtrl($scope) {
    $scope.num1=10;
    $scope.num2=0;

    $scope.operator="+";
}
