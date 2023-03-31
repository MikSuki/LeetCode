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

function isSymmetric(root: TreeNode | null): boolean {
    function recur(l: TreeNode | null, r: TreeNode | null){
        if(l == null && r == null) return true
        if(l == null || r == null) return false
        if(l.val != r.val) return false
        return recur(l.left, r.right) && recur(l.right, r.left)
    }
    return recur(root, root)
};