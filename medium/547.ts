function findCircleNum(isConnected: number[][]): number {
    const n: number = isConnected.length
    const vis: number[] = new Array(n).fill(0)
    let cnt: number = 0
    for(let i = 0; i < n; ++i){
        if(!vis[i])
            dfs(i, ++cnt)
    }
    return cnt

    function dfs(i: number, gn: number){
        vis[i] = gn;
        for(let j = 0; j < n; ++j){
            if(i != j && !vis[j] && isConnected[i][j]) 
                dfs(j, gn)
        }
    }
};
