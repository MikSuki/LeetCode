// 2265. Count Nodes Equal to Average of Subtree
function averageOfSubtree(root: TreeNode | null): number {
    let cnt: number = 0;
    dfs(root);
    return cnt;

    function dfs(root: TreeNode): {sum: number, n: number}{
        if(root == null) return {sum: 0, n: 0};
        const l = dfs(root.left);
        const r = dfs(root.right);
        const sum = l.sum + r.sum + root.val;
        const n = l.n + r.n + 1;
        if(~~(sum / n) == root.val) 
            ++cnt;
        return {
            sum: sum,
            n: n
        };
    }
};
