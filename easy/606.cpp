/**
    # 606. Construct String from Binary Tree
*/

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
    string tree2str(TreeNode* root) {
        string res = "";
        dfs(root, res);
        return res;
    }

private:
    void dfs(TreeNode *root, string& str){
        if(!root) return;
        str += to_string(root->val);
        if(!root->left && !root->right) return;

        // left
        str += "(";
        dfs(root->left, str);
        str += ")";

        // right
        if(root->right){
            str += "(";
            dfs(root->right, str);
            str += ")";
        }
    }
};
