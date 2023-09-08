/**
    199. Binary Tree Right Side View
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

function rightSideView(root: TreeNode | null): number[] {
    const res: number[] = []
    dfs(root, 0)
    return res

    function dfs(root: TreeNode, level: number) {
        if (root == null) return false
        res[level] = root.val
        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }
};