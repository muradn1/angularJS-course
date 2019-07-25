module.controller("gameCtrl", GameCtrl);

// DI dependency injection - IOC
function GameCtrl($scope, $timeout, dataService) {

    $scope.data = dataService.data;

    $scope.gameMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0));

    $scope.showCellsFlags = new Array(4).fill(false).map(() => new Array(4).fill(false));

    let firstChoice = { val: -1, i: -1, j: -1 };
    let secondChoice = { val: -1, i: -1, j: -1 };

    $scope.isToShowCell = (i, j) => {
        return $scope.showCellsFlags[i][j];
    }

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

                    switchUser();
                }, 1000);
            }

            firstChoice.val = -1;
            secondChoice.val = -1;
        }
    }

    let switchUser = () => {
        $scope.data.currentUser = $scope.data.currentUser == "user1" ? "user2" : "user1";
    }

    let generateValues = () => {
        let getRandomIndexs = () => {
            let i = Math.floor(Math.random() * 4);
            let j = Math.floor(Math.random() * 4);

            if (!$scope.gameMatrix[i][j]) {
                return { i, j };
            }

            return getRandomIndexs();
        }
        for (let num = 1; num <= 8; num++) {
            var { i, j } = getRandomIndexs();
            $scope.gameMatrix[i][j] = num;
            var { i, j } = getRandomIndexs();
            $scope.gameMatrix[i][j] = num;
        }
    }

    generateValues();
}