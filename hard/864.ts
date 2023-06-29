/**
    問題: 
        給一張圖，其中包含鑰匙、門鎖、無和牆
            門鎖: 有對應的鑰匙才能開門
            牆: 無法經過

        求找到所有鑰匙的最短走法

    方法:
        BFS + 記錄走過每格時擁有的鑰匙  (和傳統BFS不同的是，可能需要重複拜訪走過的格子)

        擁有的鑰匙用bitmask記錄，再根據碰到的格子處理即可。

    時間:
        O(mn + m * n * 2^k) = O(m * n * 2^k)
 */

function shortestPathAllKeys(grid: string[]): number {
    const m = grid.length, n = grid[0].length
    const visited: Set<number>[][] = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Set()))
    let target: number = 0
    /** [x, y, mask] */
    const q: number[][] = []
    let step: number = -1
    const dir: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] == '@')
                q.push([i, j, 0])
            else if (grid[i][j] >= 'a' && grid[i][j] <= 'f') {
                const pos: number = grid[i].charCodeAt(j) - 'a'.charCodeAt(0)
                target |= 1 << pos
            }
        }
    }


    while (q.length) {
        ++step
        let len = q.length

        while (--len >= 0) {
            const [x, y, mask] = q.shift()

            for (const [i, j] of dir) {
                const xx = x + i, yy = y + j
                if (xx < 0 || yy < 0 || xx >= m || yy >= n)
                    continue
                if (grid[xx][yy] == '#')
                    continue
                else if (grid[xx][yy] >= 'a' && grid[xx][yy] <= 'f') {
                    const pos: number = grid[xx].charCodeAt(yy) - 'a'.charCodeAt(0)
                    const nmask = mask | 1 << pos
                    if (nmask == target)
                        return step + 1
                    if (!visited[xx][yy].has(nmask)) {
                        visited[xx][yy].add(nmask)
                        q.push([xx, yy, nmask])
                    }
                }
                else if (grid[xx][yy] >= 'A' && grid[xx][yy] <= 'F') {
                    const pos: number = grid[xx].charCodeAt(yy) - 'a'.charCodeAt(0)
                    // has key
                    if ((mask >> pos) & 1)
                        if (!visited[xx][yy].has(mask)) {
                            visited[xx][yy].add(mask)
                            q.push([xx, yy, mask])
                        }
                }
                else {
                    const pos: number = grid[xx].charCodeAt(yy) - 'a'.charCodeAt(0)
                    if (!visited[xx][yy].has(mask)) {
                        visited[xx][yy].add(mask)
                        q.push([xx, yy, mask])
                    }
                }
            }
        }
    }

    return -1
}