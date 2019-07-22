
module.controller("timeCtrl",TimeCtrl)

// DI dependency injection - IOC
function TimeCtrl($scope) {
    //alert("hello from time controller")
    
    $scope.time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    $scope.updateTime = function() {
        $scope.time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    }

}