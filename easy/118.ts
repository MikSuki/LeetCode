/**
    118. Pascal's Triangle
 */
function generate(numRows: number): number[][] {
    if (numRows == 1) return [[1]]
    const res: number[][] = [[1], [1, 1]]

    for (let i = 2; i < numRows; ++i) {
        const row: number[] = [1]
        for (let j = 0; j < i - 1; ++j)
            row.push(res[i - 1][j] + res[i - 1][j + 1])
        res.push(row.concat([1]))
    }

    return res
};