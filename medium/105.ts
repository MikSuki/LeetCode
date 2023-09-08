/**
    105. Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length == 0) return null
    const root: TreeNode = new TreeNode(preorder[0])
    const in_pos: number = inorder.indexOf(root.val) // position of root in inorder
    root.left = buildTree(preorder.slice(1, in_pos + 1), inorder.slice(0, in_pos))
    root.right = buildTree(preorder.slice(in_pos + 1), inorder.slice(in_pos + 1))
    return root
};