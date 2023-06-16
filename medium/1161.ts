/**
 * 題目: 給一棵binary tree，找總和最大的level。
 * 
 * 方法: 用array記每一層的總和，用dfs拜訪，
 *       最後回傳最大的level即可。
 * 
 * 時間複雜度: O(n)
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

function maxLevelSum(root: TreeNode | null): number {
    let sum: number[] = [0]
    dfs(root, 0)
    return sum.reduce((max, v, i) => {
        if (v > max.v) {
            max.v = v
            max.level = i
        }
        return max
    }, { v: Number.MIN_SAFE_INTEGER, level: 0 })
        .level + 1

    function dfs(node: TreeNode | null, level: number) {
        if (node == null) return
        if (sum.length < level + 1)
            sum[level] = 0
        sum[level] += node.val
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
};