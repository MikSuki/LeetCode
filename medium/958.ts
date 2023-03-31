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

function isCompleteTree(root: TreeNode | null): boolean {
    let max_depth = 0
    let last_depth = 0

    function dfs(root: TreeNode | null, depth: number){
        if(root == null) {
            if(last_depth == 0) last_depth = max_depth
            if(depth <= last_depth && depth >= max_depth - 1){
                last_depth = depth
                return true
            } 
            return false
        }
        ++depth
        max_depth = Math.max(depth, max_depth)
        return dfs(root.left, depth) && dfs(root.right, depth)
    }

    return dfs(root, 0)
};