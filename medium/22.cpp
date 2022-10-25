class Solution {
public:
    vector<string> generateParenthesis(int n) {
        if(n == 0) return vector<string> {""};
        vector<string> ans;
        for(int c = 0; c < n; ++c){
            vector<string> v_left = generateParenthesis(c);
            for(int i = 0; i < v_left.size(); ++i){
                vector<string> v_right = generateParenthesis(n - 1 - c);
                for(int j = 0; j < v_right.size(); ++j){
                    ans.push_back("(" + v_left[i] + ")" + v_right[j]);
                }
            }
        }
        return ans;
    }
};