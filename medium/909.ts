function snakesAndLadders(board: number[][]): number {
    const n: number = board.length
    const nn: number = n * n
    const dp: number[] = new Array(nn + 1).fill(-1)
    const queue: number[] = [1]
    const getBoard = (num: number) => {
        const i = n - Math.ceil(num / n)
        const j = (n - i) % 2 ? (num - 1) % n: n - (num - 1) % n - 1
        return board[i][j]
    }
    dp[1] = 0
    while(queue.length){
        const cur = queue.shift()
        for(let next = cur + 1; next <= Math.min(cur + 6, nn); ++next){
            const jump = getBoard(next)
            const dest = jump == -1 ? next : jump
            if(dp[dest] == -1){
                queue.push(dest)
                dp[dest] = dp[cur] + 1
            }
        }
    }
    return dp[nn]
};