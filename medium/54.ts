function spiralOrder(matrix: number[][]): number[] {
    const res: number[] = []
    dfs(matrix)
    return res

    function dfs(submat: number[][]){
        const m = submat.length
        const n = submat[0].length

        if(m == 1){
            submat[0].forEach(v => res.push(v))
        }
        else if(n == 1) {
            for(let i = 0; i < m; ++i)
                res.push(submat[i][0])
        }
        else{
            for(let i = 0; i < n; ++i)
                res.push(submat[0][i])
            for(let i = 1; i < m; ++i)
                res.push(submat[i][n-1])
            for(let i = n - 2; i > 0; --i)
                res.push(submat[m - 1][i])
            for(let i = m - 1; i > 0; --i)
                res.push(submat[i][0])
                
            if(m > 2 && n > 2){
                const next: number[][] = []
                for(let i = 1; i < m - 1; ++i)
                    next.push(submat[i].slice(1, n - 1))
                dfs(next)
            }
        }
    }
};