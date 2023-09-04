/**
    102. Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = []
    dfs(root, 0)
    return res

    function dfs(root: TreeNode, level: number) {
        if (root == null) return
        if (res[level] == undefined) res.push([])
        res[level].push(root.val)
        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }
};