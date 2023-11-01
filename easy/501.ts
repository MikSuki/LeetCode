/**
    501. Find Mode in Binary Search Tree
    # Tree Sorting
 */
function findMode(root: TreeNode | null): number[] {
    const res: number[] = [];
    let f: number = 0, maxf: number = 0, cv = 100001;
    dfs(root);
    return res;

    function dfs(node: TreeNode) {
        if (!node) return;
        dfs(node.left);

        if (cv == node.val)
            ++f;
        else {
            f = 1;
            cv = node.val;
        }

        if (f > maxf) {
            maxf = f;
            res.length = 0;
            res.push(node.val);
        }
        else if (f == maxf)
            res.push(node.val);

        dfs(node.right);
    }
};
