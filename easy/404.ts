interface Node {
    val: number
    left: TreeNode
    right: TreeNode
    dir: number
}

function sumOfLeftLeaves(root: TreeNode | null): number {
    return tree2Arr(root, [], 0)
        .filter(node => !node.left && !node.right) // is leaf
        .filter(node => node.dir == -1) // is left node
        .reduce((acc: number, node: Node) => acc + node.val, 0) 

    // dir: left: -1 / right: 1 / root's dir: 0
    function tree2Arr(root: TreeNode, arr: Node[], dir: number): Node[] {
        if(!root) return arr
        arr.push({...root, dir: dir})
        tree2Arr(root.left, arr, -1)
        tree2Arr(root.right, arr, 1)
        return arr
    }
};
