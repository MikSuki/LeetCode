/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 比較兩棵 tree 的 leaf nodes 是否完全相同
 * recursive 分別找，再比較即可
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const arr1 = [],
        arr2 = [];
    const getLeaves = (root, arr) => {
        if (!root.left && !root.right) arr.push(root.val)
        if (root.left) getLeaves(root.left, arr)
        if (root.right) getLeaves(root.right, arr)
    }
    getLeaves(root1, arr1)
    getLeaves(root2, arr2)

    console.table(arr1)
    console.table(arr2)

    return arr1.length === arr2.length && arr1.every((v, idx) => v === arr2[idx])
};