/**
 * 給一張人際關係圖，有邊的代表互相討厭
 * 要把有邊的完全拆開，拆成兩堆
 * 用 bfs 分兩個 colors
 * Time Complexity: O(N+E)
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const paths = new Array(n + 1).fill(null).map(() => [])
    const color = new Array(n + 1).fill(null).map(() => -1)
    dislikes.forEach(e => {
        paths[e[0]].push(e[1]);
        paths[e[1]].push(e[0]);
    })

    const bfs = start => {
        const queue = [start]
        while (queue.length) {
            const x = queue.shift()
            for (const v of paths[x]) {
                if (color[v] === -1) {
                    color[v] = 1 - color[x]
                    queue.push(v)
                } else if (color[v] === color[x]) return false
            }
        }
        return true
    }

    for (let i = 1; i <= n; ++i)
        if (color[i] === -1) {
            color[i] = 0
            if (!bfs(i)) return false
        }
    return true
};