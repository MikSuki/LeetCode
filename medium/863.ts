/**
    問題:
        給一個binary tree，找和target距離為k的節點

    方法:   
        dfs建undirected graph
        bfs找距離k

    時間:
        O(n)
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    if (k == 0) return [target.val]

    const edges: Map<number, number[]> = new Map()
    const visited = new Array(500).fill(0)
    const res: number[] = []

    dfs(root, -1)

    // bfs
    const q: number[] = [target.val]
    let d: number = 1
    while (q.length && d <= k) {
        let l = q.length

        while (--l >= 0) {
            const node = q.shift()
            visited[node] = 1
            edges.get(node).forEach(e => {
                if (visited[e] == 0 && e != -1) {
                    visited[e] = 1
                    if (d == k)
                        res.push(e)
                    else
                        q.push(e)
                }
            })
        }
        ++d
    }

    return res

    // dfs get undirected graph
    function dfs(root: TreeNode, parent: number) {
        if (root == null) return
        //set edge
        let arr1 = edges.get(parent)
        let arr2 = edges.get(root.val)
        if (arr1 == null) edges.set(parent, [root.val])
        else arr1.push(root.val)
        if (arr2 == null) edges.set(root.val, [parent])
        else arr2.push(parent)

        dfs(root.left, root.val)
        dfs(root.right, root.val)
    }
};