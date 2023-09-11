/**
    230. Kth Smallest Element in a BST
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

function kthSmallest(root: TreeNode | null, k: number): number {
    let f: boolean = false
    let cnt: number = 0
    return dfs(root, k)

    function dfs(root: TreeNode, k: number): number {
        if (root == null) {
            f = true
            return -1
        }
        const l: number = dfs(root.left, k)
        if (l != -1) return l
        if (f && ++cnt == k) return root.val
        const r: number = dfs(root.right, k)
        if (r != -1) return r
        return -1
    }
};