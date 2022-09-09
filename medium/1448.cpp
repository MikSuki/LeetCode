/**
 * Definition for a binary tree node->
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
   public:
    int c = 0;
    int goodNodes(TreeNode* root) {
        if (root) recursive(root, root->val);
        return c;
    }

    void recursive(TreeNode* node, int max) {
        if (node && node->val >= max) {
            ++c;
            max = node->val;
        }
        if (node->left) recursive(node->left, max);
        if (node->right) recursive(node->right, max);
    }
};