function countNegatives(grid: number[][]): number {
    const n = grid[0].length
    let c = 0
    for(let i = 0; i < grid.length; ++i){
        let j = n
        while(j > 0 && grid[i][j - 1] < 0)
            --j
        c += n - j
    }
    return c
};