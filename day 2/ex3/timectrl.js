
module.controller("timeCtrl",TimeCtrl)

function TimeCtrl($scope) {    
    $scope.time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    
    $scope.updateTime = function() {
        $scope.time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    }

}