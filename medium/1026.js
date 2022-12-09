/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 找 binary tree ancestor 和 child 最大差值
 * 記著 maximum & minmum，然後 DFS 即可
 * O(n)
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    function getMaxDiff(root, max, min, diff) {
        if (root) {
            diff = Math.max(Math.abs(max - root.val), Math.abs(min - root.val))
            max = Math.max(max, root.val)
            min = Math.min(min, root.val)
            diff = Math.max(diff, getMaxDiff(root.left, max, min, diff))
            diff = Math.max(diff, getMaxDiff(root.right, max, min, diff))
        }
        return diff
    }
    return getMaxDiff(root, root.val, root.val, 0)
};