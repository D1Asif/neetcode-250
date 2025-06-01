/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    for (let row = 0; row < this.matrix.length; row++)  {
        for (let col = 1; col < this.matrix[row].length; col++) {
            this.matrix[row][col] += this.matrix[row][col-1]
        }
    }

    for (let row = 1; row < this.matrix.length; row++) {
        for (let col = 0; col < this.matrix[row].length; col++) {
            this.matrix[row][col] += this.matrix[row-1][col]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.matrix[row2][col2] 
    - (row1 === 0 ? 0 : this.matrix[row1-1][col2]) 
    - (col1 === 0 ? 0 : this.matrix[row2][col1-1]) 
    + ((row1 === 0 || col1 === 0) ? 0 : this.matrix[row1-1][col1-1])
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */