/**
    36. Valid Sudoku
 */
function isValidSudoku(board: string[][]): boolean {
    const row: Set<string>[] = new Array(9)
    const col: Set<string>[] = new Array(9)
    // init
    for (let i = 0; i < 9; ++i) {
        row[i] = new Set()
        col[i] = new Set()
    }
    // for each block
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            const set: Set<string> = new Set()
            for (let k = 0; k < 3; ++k) {
                for (let l = 0; l < 3; ++l) {
                    const [x, y] = [i * 3 + k, j * 3 + l]
                    const v = board[x][y]
                    if (v == '.') continue
                    if (set.has(v) || row[x].has(v) || col[y].has(v)) return false
                    set.add(v)
                    row[x].add(v)
                    col[y].add(v)
                }
            }
        }
    }
    return true
};
