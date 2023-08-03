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

function isBalanced(root: TreeNode | null): boolean {
    if (root == null) return true
    const l = height(root.left, 0)
    const r = height(root.right, 0)
    if (Math.abs(l - r) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)

    function height(root: TreeNode, h: number): number {
        if (root == null) return h
        return Math.max(height(root.left, h + 1), height(root.right, h + 1))
    }
};