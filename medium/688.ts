/**
    題目:   
        688. Knight Probability in Chessboard

    問題:  
        給n*n的西洋棋棋盤，以及k和一個位置(i, j)
        找出(i, j)移動k次後，仍在棋盤中的機率
        而移動是knight的移動，跟馬一樣，共8個方位
    
    方法:   
        dp==

        dp[[k][i][j]: 從(i, j)移動了k次，仍在棋盤中的機率
        移動k-1次之8個方向的平均
            dp[k][i][j] = (dp[k-1][i + dir][j + dir]) / 8
        最後輸出要找的位置即可
    
    時間:   
        O(k * n^2)

 */

function knightProbability(n: number, k: number, row: number, column: number): number {
    const dp: number[][][] = new Array(k + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)))
    const dirs: number[][] = [[2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2]]
    for (let i = 0; i < n; ++i)
        for (let j = 0; j < n; ++j)
            dp[0][i][j] = 1

    for (let kk = 1; kk <= k; ++kk) {
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                for (let [x, y] of dirs) {
                    x += i
                    y += j
                    if (x < 0 || y < 0 || x >= n || y >= n)
                        continue
                    dp[kk][i][j] += dp[kk - 1][x][y]
                }
                dp[kk][i][j] /= 8
            }
        }
    }

    return dp[k][row][column]
};