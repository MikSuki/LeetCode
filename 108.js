/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return cvtToBST(0, nums.length - 1);

    function cvtToBST(i, j) {
        if (i > j) return null;

        const m = ~~((i + j) / 2),
            root = new TreeNode(nums[m]);

        root.left = cvtToBST(i, m - 1);
        root.right = cvtToBST(m + 1, j);
        return root;
    }
};

// sortedArrayToBST([0, 1, 2, 3, 4]);
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))