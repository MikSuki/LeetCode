/**
 * dp 找對角移動總和之minmum
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const m = matrix[0].length
    const n = matrix.length
    let lastRow = matrix[0]
    let curRow;
    for(let i = 1; i < n; ++i){
        curRow = []
        for(let j = 0; j < m; ++j){
            let min = lastRow[j]
            if(j !== 0) min = Math.min(min, lastRow[j-1])
            if(j !== m-1) min = Math.min(min, lastRow[j + 1])
            curRow.push(matrix[i][j] + min)
        }
        lastRow = curRow
    }
    if(!curRow) curRow = lastRow
    return curRow.reduce((v, min) => Math.min(min, v), Number.MAX_SAFE_INTEGER) 
};