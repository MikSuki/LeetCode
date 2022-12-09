/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 找 sum of bst，有 range 限制
 * 就...恩
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const sum = root => {
        if (root === null) return 0
        const v = (root.val < low || root.val > high) ? 0 : root.val
        return v + sum(root.left) + sum(root.right)
    }
    return sum(root)
};