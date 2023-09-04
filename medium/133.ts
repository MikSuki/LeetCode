/**
    133. Clone Graph
 */

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    const nodes: Node[] = []
    dfs(node)
    return nodes[1]

    function dfs(on: Node) {
        if (on == null) return
        const neighbors: Node[] = []
        on.neighbors.forEach(n => {
            if (nodes[n.val] == undefined) {
                nodes[n.val] = new Node(n.val)
                dfs(n)
            }
            neighbors.push(nodes[n.val])
        })
        if (nodes[on.val] == undefined)
            nodes[on.val] = new Node(on.val, neighbors)
        else
            nodes[on.val].neighbors = neighbors
    }
};