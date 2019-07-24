module.controller("sumCtrl", SumCtrl);

// DI dependency injection - IOC
function SumCtrl($scope, dataService,globalConst) {

    $scope.ab = dataService.ab;

    $scope.getClass = () => {
        let sumResult = $scope.ab.a + $scope.ab.b;
        if($scope.ab.color){
            if(sumResult > 0){
                return globalConst.colorMaps[$scope.ab.color].positive;
            }else{
                return globalConst.colorMaps[$scope.ab.color].negative; 
            }
        }
    }
}

