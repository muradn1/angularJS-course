
module.controller("calcChildCtrl", CalcChildCtrl);

// DI dependency injection - IOC
function CalcChildCtrl($scope,$rootScope) {
    const math_it_up = {
        '+':(x, y) => { return x + y },
        '-': (x, y) => { return x - y },
        '*': (x, y) => { return x * y },
        '/': (x, y) => { return x / y }
    };

    $scope.result = () => {
       return math_it_up[$scope.$parent.operator]($scope.$parent.num1,$scope.$parent.num2);
    }
    $rootScope.result =  $scope.result;
}
