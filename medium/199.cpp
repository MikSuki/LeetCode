// 199. Binary Tree Right Side View

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        vector<int> res;
        dfs(root, res, 0);
        return res;
    }

private:
    void dfs(TreeNode *root, vector<int>& res, int level){
        if(!root) return;
        if(res.size() < level + 1) res.push_back(root->val);
        else res[level] = root->val;
        // res[level] = root->val;
        dfs(root->left, res, level + 1);
        dfs(root->right, res, level + 1);
    }
};
