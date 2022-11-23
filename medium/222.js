/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var countNodes = function(root) {
    if(root === null) return 0;
    let hl = 0, hr = 0;
    let nl = root.left, nr = root.right;
    while(nl !== null){++hl; nl = nl.left;}
    while(nr !== null){++hr; nr = nr.right;}
    if(hl === hr) return 2 * 2 ** hl - 1;
    return 1 + countNodes(root.left) + countNodes(root.right);
};