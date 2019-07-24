module.controller("bCtrl", BCtrl);

// DI dependency injection - IOC
function BCtrl($scope, bService) {
    $scope.strBto1 = "";

    $scope.printBto1 = () => {
        $scope.strBto1 = bService.getBto1();
    };
}