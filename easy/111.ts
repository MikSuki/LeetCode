/**
    問題:
        找 binary最低的深度，也就是最近的leaf

    方法:   
        BFS
    
    時間:
        O(n)
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

function minDepth(root: TreeNode | null): number {
    const q: TreeNode[] = [root]
    let d = 1
    while(q.length){
        let l = q.length

        while(--l >= 0){
            const n = q.shift()
            if(n == null) continue
            if(n.left == null && n.right == null)
                return d
            q.push(n.left, n.right)
        }
        ++d
    }
    return 0
};
