/**
    257. Binary Tree Paths
 */
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> res = new ArrayList();
        dfs(root, "", res);
        return res;
    }

    private void dfs(TreeNode root, String str, List<String> res){
        String ns = str.length() == 0 ? Integer.toString(root.val) : str + "->" + root.val;
        if(root.left == null && root.right == null) res.add(ns);
        else{
            if(root.left != null)
                dfs(root.left, ns, res);
            if(root.right != null)
                dfs(root.right, ns, res);
        }
    }
}
