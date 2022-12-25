/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 給一 binary tree
 * 找截斷某條邊後，兩 trees 之乘積最大值
 * 找所有 subtrees 之 sum，
 * 然後再掃過一遍即可
 * Time Complexity: O(n)
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    const sums = []
    const getSum = root => {
        if (root === null) return 0
        sums.push(root.val + getSum(root.left) + getSum(root.right))
        return sums.at(-1)
    }
    const total = getSum(root)
    return Math.max(...sums.map(v => v * (total - v))) % (10 ** 9 + 7)
};