/**
    # 2876. Count Visited Nodes in a Directed Graph

    # 問題:
        給一個有向圖，找出每個點往前走到底會經過不同點的數量

    # 方法:
        1. 此題只會有指向cycle或cycle裡面的邊
            (1)o -> o -> o

            (2)o -> o -> o -> o -> o
                         ^---------'

        2. 先用toposort，找出非cycle的點
            (不斷刪掉indegree = 0的點，直到沒有)
        
        3. 算出每個cylce的數量

        4. 算出非cycle點的數量
    
    #時間:
        O(n)
 */

class MyQueue<T> {

    public constructor(
        private elements: Record<number, T> = {},
        private head: number = 0,
        private tail: number = 0
    ) { }

    public enqueue(element: T): void {
        this.elements[this.tail] = element;
        this.tail++;
    }

    public dequeue(): T {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;

        return item;
    }

    public top(): T {
        return this.elements[this.head];
    }

    public get size(): number {
        return this.tail - this.head;
    }
}

function countVisitedNodes(edges: number[]): number[] {
    const n: number = edges.length
    const indeg: number[] = new Array(n)
    for (let i = 0; i < n; ++i)
        indeg[i] = 0

    edges.forEach(v => indeg[v]++)

    const q = new MyQueue<number>()
    for (let i = 0; i < n; ++i)
        if (indeg[i] == 0) q.enqueue(i)

    while (q.size) {
        const v: number = q.dequeue()
        const next: number = edges[v]
        --indeg[next]
        if (indeg[next] == 0) q.enqueue(next)
    }

    const res: number[] = new Array(n)
    // each len in cycle
    for (let i = 0; i < n; ++i) {
        if (indeg[i] == 0 || res[i] != undefined) continue
        let j: number = i
        let len: number = 1
        while (edges[j] != i) {
            ++len
            j = edges[j]
        }
        j = i
        while (edges[j] != i) {
            res[j] = len
            j = edges[j]
        }
    }

    // each len not in cycle
    for (let i = 0; i < n; ++i) {
        if (res[i] != undefined) continue
        dfs(i, res, edges)
    }

    return res

    function dfs(x: number, res: number[], edges: number[]): number {
        if (res[x] != undefined) return res[x]
        res[x] = dfs(edges[x], res, edges) + 1
        return res[x]
    }
}
