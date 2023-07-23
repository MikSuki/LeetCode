/**
    題目:
        894. All Possible Full Binary Trees

    問題:   
        給一整數 n，找到所有的 n 格節點的 full binary tree
        fbt: 任意節點的children數量為0或2

    方法:   
        dfs

        fbt的節點數只能為奇數，且因為有 root，所以root的children可分為兩個奇數
        以 n = 7為例，root的children為:
            1, 5
            3, 3
            5, 1
        所以 dfs 分左右，再把它們合併到root，即為答案


        用 map 存各種節點量的fbt

    時間:
        O(2^n)

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

function allPossibleFBT(n: number): Array<TreeNode | null> {
    const map: Map<number, TreeNode[]> = new Map()
    map.set(1, [new TreeNode(0)])
    if (n % 2 == 0) return []
    return dfs(n)

    function dfs(k: number): TreeNode[] {
        if (map.has(k)) return map.get(k)
        const res: TreeNode[] = []

        for (let i = 1; i < k; i += 2) {
            const left: TreeNode[] = dfs(i)
            const right: TreeNode[] = dfs(k - i - 1)

            left.forEach(l => {
                right.forEach(r => {
                    res.push(new TreeNode(0, l, r))
                })
            })
        }
        map.set(k, res)
        return res
    }
};