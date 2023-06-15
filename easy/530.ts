/**
 * 題目: 給一棵binary search tree，找到絕對值差最小值在任兩個不同點之間
 * 
 * 方法: 
 *      inorder 遍歷。
 *      因為是bst，和root相差最小的是左子樹最右邊的點和右子樹最左邊的點
 *      (bst經果inorder遍歷後，會是一個sorted sequence)
 *      所以pv保留的是當前點"左側"最接近的值
 * 
 * 時間複雜度: O(n)
 */

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
function getMinimumDifference(root: TreeNode | null): number {
    let min = Number.MAX_SAFE_INTEGER
    let pv = -1
    inorder(root)
    return min

    function inorder(node: TreeNode | null) {
        if (node == null) return
        inorder(node.left)
        if(pv >= 0)
            min = Math.min(min, node.val - pv)
        pv = node.val
        inorder(node.right)
    }
};