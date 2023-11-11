/**
    # 2642. Design Graph With Shortest Path Calculator
 */

class Graph {
    adj: Map<number, number[][]>; // Map<from, [to, cost]>
    n: number;

    constructor(n: number, edges: number[][]) {
        this.n = n;
        this.adj = new Map();

        for (let i = 0; i < n; ++i)
            this.adj.set(i, []);

        edges.forEach(edge => { this.addEdge(edge); })
    }

    addEdge(edge: number[]): void {
        const [from, to, cost]: number[] = edge;
        this.adj.get(from).push([to, cost]);
    }

    shortestPath(node1: number, node2: number): number {
        const pq = new MinPriorityQueue({ priority: (e: number[]) => e[1] });
        const visited: number[] = new Array(this.n).fill(0);
        pq.enqueue([node1, 0]);

        while (pq.size() > 0) {
            const [to1, cost1]: number[] = pq.dequeue().element;
            if (to1 == node2) return cost1;
            if(visited[to1]) continue;
            visited[to1] = 1;
            const nexts: number[][] = this.adj.get(to1);
            for (const [to2, cost2] of nexts) {
                pq.enqueue([to2, cost1 + cost2]);
            }
        }

        return -1;
    }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
