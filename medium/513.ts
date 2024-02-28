// 513. Find Bottom Left Tree Value

function findBottomLeftValue(root: TreeNode | null): number {
    const max = {
        level: -1,
        val: Number.MIN_SAFE_INTEGER
    }

    dfs(root, 0, max);
    return max.val;

    function dfs(node: TreeNode, level: number, max: {level: number, val: number}){
        if(!node) return;
        setVal(max, level, node.val);
        dfs(node.right, level + 1, max);
        dfs(node.left, level + 1, max);
    }

    function setVal(max: {level: number, val: number}, level: number, val: number){
        if(level >= max.level){
            max.level = level;
            max.val = val;
        }
    }
};
