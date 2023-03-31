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

function sumNumbers(root: TreeNode | null): number {
    let sum = 0
    function dfs(root: TreeNode | null, acc: number){
        if(root == null) return 
        acc = acc* 10 + root.val
        if(root.left == null && root.right == null)
            sum += acc
        else{
            dfs(root.left, acc)
            dfs(root.right, acc)
        }
    }

    dfs(root, 0)
    return sum
};