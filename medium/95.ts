/**
    題目:
        95. Unique Binary Search Trees II

    描述:
        給一個n，求所以包含1~n的binary search tree

    方法:
        從1~n中選出一個當root
        之後分別建立左半和右半的 BSTs
        最後組合在一起

    時間:
        O(@@)
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

function generateTrees(n: number): Array<TreeNode | null> {

    return helper(1, n)

    function helper(i: number, j: number): Array<TreeNode | null> {
        if (i > j) return [null]
        if (i == j) return [new TreeNode(i)]

        const res: Array<TreeNode> = []
        for (let k = i; k <= j; ++k) {
            const left: Array<TreeNode> = helper(i, k - 1)
            const right: Array<TreeNode> = helper(k + 1, j)
            left.forEach(l => {
                right.forEach(r => {
                    const root: TreeNode = new TreeNode(k)
                    root.left = l
                    root.right = r
                    res.push(root)
                })
            })
        }
        return res
    }
};