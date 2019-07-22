
module.controller("nameCtrl", NameCtrl)

// DI dependency injection - IOC
function NameCtrl($scope) {
    //alert("hello from time controller")
    
    $scope.name = "murad";
    $scope.reverseName = function() {
        $scope.name = $scope.name.split("").reverse().join("");
    }

}