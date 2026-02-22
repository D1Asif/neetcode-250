var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let objectMap = {};
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                continue;
            }
            if (!objectMap[board[i][j]]) {
                objectMap[board[i][j]] = 1;
            } else {
                return false;
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        let objectMap = {};
        for (let j = 0; j < 9; j++) {
            if (board[j][i] === ".") {
                continue;
            }
            if (!objectMap[board[j][i]]) {
                objectMap[board[j][i]] = 1;
            } else {
                return false;
            }
        }
    }

    return true;
};