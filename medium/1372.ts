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

function longestZigZag(root: TreeNode | null): number {
    const DIR = {left: -1, right: 1}
    let max: number = 0
    dfs(root, 0, 0)
    return max

    function dfs(node: TreeNode | null, dir: number, len: number){
        max = Math.max(max, len)
        if(node == null) return
        if(node.left)
            dfs(node.left, DIR.left, dir == DIR.right ? len + 1 : 1)
        if(node.right)
            dfs(node.right, DIR.right, dir == DIR.left ? len + 1 : 1)
    }
};