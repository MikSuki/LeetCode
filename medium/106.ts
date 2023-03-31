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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    // postorder: root -> end
    // inoreder:  root -> middle, so it can split left subtree and right subtree

    function dfs(is: number, ie: number, ps: number, pe: number): TreeNode | null{
        if(ps == pe) return new TreeNode(postorder[pe])
        
        const root = new TreeNode(postorder[pe])
        const im = inorder.indexOf(root.val)
        // no right subtree
        if(im >= ie){
            root.left = dfs(is, im - 1, ps, pe - 1)
        }
        // no left subtree
        else if(im <= is){
            root.right = dfs(im + 1, ie, ps, pe - 1)
        }
        else{
            const nl = im - is // number of left subtree 
            root.left = dfs(is, im - 1, ps, ps + nl - 1)
            root.right = dfs(im + 1, ie, ps + nl, pe - 1)
        }
        return root
    }
    return dfs(0, inorder.length - 1, 0, inorder.length - 1)
};