/**
    題目:
        74. Search a 2D Matrix

    描述:
        給一個sorted 2d-array，求 裡面有沒有 target
    
    方法:
        binary search
        range: 0 ~ m*n-1
        再轉成 i 和 j 去 搜尋

    時間:
        O(m * n)

 */

function searchMatrix(matrix: number[][], target: number): boolean {
    const m: number = matrix.length, n: number = matrix[0].length
    const i12 = (i: number) => [~~(i / n), i % n]
    let l: number = 0, r: number = m * n - 1

    while (l <= r) {
        const mm: number = l + ~~((r - l) / 2)
        const [i, j]: number[] = i12(mm)
        if (matrix[i][j] == target)
            return true
        else if (matrix[i][j] > target)
            r = mm - 1
        else
            l = mm + 1
    }
    return false
};