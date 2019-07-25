module.service("gameService", function(dataService) {
    

    this.generateMatrixValues = () => {
        let gameMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0));

        let getRandomIndexs = () => {
            let i = Math.floor(Math.random() * 4);
            let j = Math.floor(Math.random() * 4);

            if (!gameMatrix[i][j]) {
                return { i, j };
            }

            return getRandomIndexs();
        }

        for (let num = 1; num <= 8; num++) {
            var { i, j } = getRandomIndexs();
           gameMatrix[i][j] = num;
            var { i, j } = getRandomIndexs();
           gameMatrix[i][j] = num;
        }

        return gameMatrix;

    }

    this.switchUser = () => {
        dataService.data.currentUser = dataService.data.currentUser == "user1" ? "user2" : "user1";
    }
})