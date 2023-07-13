/**
    問題:
        有 numCourses 堂課，且prerequisites 規定先修條件
        求是否能修完全部的課
    
    方法:
        其實就是有向圖找有沒有cycle

        BFS
        先算出所有點的in-degree(先修的數量)
        不斷遍歷in-degree = 0的點，把他連到點的in-degree - 1，直到沒有 = 0的點
        如果全部都訪問過，代表沒cycle；反之有

    時間:
        O(n)
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const indegree: number[] = new Array(numCourses).fill(0)
    const graph: Map<number, number[]> = new Map()
    let cnt: number = 0

    // set map & in-degree
    for (const edge of prerequisites) {
        let arr: number[] = graph.get(edge[1])
        if (arr == undefined) {
            arr = []
            graph.set(edge[1], arr)
        }
        arr.push(edge[0])
        ++indegree[edge[0]]
    }
    // BFS
    const q: number[] = []
    indegree.forEach((deg, i) => {
        if (deg == 0) q.push(i)
    })
    while (q.length) {
        let l: number = q.length
        while (--l >= 0) {
            const n: number = q.shift()
            const edges: number[] = graph.get(n)
            ++cnt
            if (edges != undefined) {
                for (const next of edges) {
                    if (--indegree[next] == 0)
                        q.push(next)
                }
            }
        }
    }

    return cnt == numCourses
};