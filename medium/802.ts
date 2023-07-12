/**
    問題: 
        給一graph，找哪些所有 safe nodes
            terminal node: 沒有往外的邊
            safe node: 每個路徑都能到 terminal node
        所以題目就是找"沒有cycle"的nodes
    
    方法:
        1. DFS
            使用visited記錄拜訪情況
                0: 還沒走過
                1: 走過一次
                2: 確定是safe node
            
            每次擺訪新的點，visited[i]設為1
            確定這些走過的地方都是safe node後，將每個點設為2(剛好DFS會不斷往回走)
            最後return visited[i]=2的nodes

    
    時間:
        O(n)
 */

function eventualSafeNodes(graph: number[][]): number[] {
    const n: number = graph.length
    const visited: number[] = new Array(n).fill(0)
    const res: number[] = []

    for (let i = 0; i < n; ++i)
        if (dfs(i)) res.push(i)

    return res

    function dfs(n: number) {
        if (visited[n] == 1) return false
        if (visited[n] == 2) return true

        visited[n] = 1
        for (const next of graph[n])
            if (dfs(next) == false)
                return false

        visited[n] = 2
        return true
    }
};