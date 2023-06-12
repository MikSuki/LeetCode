function diagonalSum(mat: number[][]): number {
    const n = mat.length
    const m = ~~(n / 2)
    let sum: number = n % 2 ? - mat[m][m] : 0
    for(let i = 0; i < n; ++i)
      sum += mat[i][i] + mat[i][n - i - 1]
    return sum
  };