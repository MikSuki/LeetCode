/**
    # 392. Is Subsequence
*/
class Solution {
public:
    bool isSubsequence(string s, string t) {
        if(s.size() == 0) return true;
        if(s.size() > t.size()) return false;

        int i = 0;
        for(char c : t)
            if(c == s[i]) {
                ++i;
                if(i == s.size()) return true;
            }
        return false;
    }
};
