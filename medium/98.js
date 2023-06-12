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
 * @return {boolean}
 */
var isValidBST = function (root) {
    return isValid(root, null, null);
};
var isValid = function (root, small, big) {
    if (root === null) return true;
    if (small !== null && root.val <= small.val || big !== null && root.val >= big.val) return false;
    return isValid(root.left, small, root) && isValid(root.right, root, big);
};
