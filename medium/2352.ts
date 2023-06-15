/**
 * 題目: 給一個 n*n array，找出行列完全相同的數列
 * 
 * 解法: 用一個map存每個row編碼過的字串，再去掃每個column
 * 
 * 時間: O(n^2)
 * @param grid
 * @returns 
 */

function equalPairs(grid: number[][]): number {
    const map: Map<string, number> = new Map()
    let res = 0
    // set row
    grid.forEach(g => {
        let row: string = ''
        g.forEach(e => {
            row += e.toString() + '_'
        })
        const c = map.get(row)
        if(map.get(row) == undefined)
            map.set(row, 1)
        else 
            map.set(row, c + 1)
    })
    // check column
    for(let j = 0; j < grid.length; ++j){
        let col: string = ''
        for(let i = 0; i < grid.length; ++i){
            col += grid[i][j].toString() + '_'
        }
        const c = map.get(col)
        if(c != undefined)
            res += c
    }
    return res
};