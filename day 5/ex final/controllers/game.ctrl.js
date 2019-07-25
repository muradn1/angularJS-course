module.controller("gameCtrl", GameCtrl);

// DI dependency injection - IOC
function GameCtrl($scope, $timeout, dataService, gameService) {

    $scope.data = dataService.data;

    $scope.gameMatrix = gameService.generateMatrixValues();

    $scope.showCellsFlags = new Array(4).fill(false).map(() => new Array(4).fill(false));

    let firstChoice = { val: -1, i: -1, j: -1 };
    let secondChoice = { val: -1, i: -1, j: -1 };

    $scope.cellClicked = (val, i, j) => {
        $scope.showCellsFlags[i][j] = true;

        if (firstChoice.val == -1) {
            firstChoice.val = val;
            firstChoice.i = i;
            firstChoice.j = j;
        }
        else if (secondChoice.val == -1) {
            secondChoice.val = val;
            secondChoice.i = i;
            secondChoice.j = j;

            dataService.data.results[dataService.data.currentUser].gusses++;

            if (firstChoice.val == secondChoice.val) {
                dataService.data.results[dataService.data.currentUser].correct++;
            }
            else {
                $timeout(() => {
                    $scope.showCellsFlags[firstChoice.i][firstChoice.j] = false;
                    $scope.showCellsFlags[secondChoice.i][secondChoice.j] = false;

                    gameService.switchUser();
                }, 1000);
            }

            firstChoice.val = -1;
            secondChoice.val = -1;
        }
    }
}