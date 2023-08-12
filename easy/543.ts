/**
    543. Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let res: number = 0
    height(root)
    return res

    function height(root: TreeNode | null): number {
        if (root == null) return 0
        const left = height(root.left) + 1
        const right = height(root.right) + 1
        res = Math.max(res, left + right - 2)
        return Math.max(left, right)
    }
};