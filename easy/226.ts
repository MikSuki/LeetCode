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

function invertTree(root: TreeNode | null): TreeNode | null {
    const inorder = (root: TreeNode | null) => {
        if (!root) return
        const tmp = root.left
        root.left = root.right
        root.right = tmp
        inorder(root.left)
        inorder(root.right)
    }
    inorder(root)
    return root
};