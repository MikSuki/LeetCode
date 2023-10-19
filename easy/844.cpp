/**
    # 844. Backspace String Compare
*/
class Solution {
public:
    bool backspaceCompare(string s, string t) {
        string s1, s2;

        for(char c : s)
            if(c != '#') s1.push_back(c);
            else if(s1.size()) s1.pop_back();
            
        for(char c : t)
            if(c != '#') s2.push_back(c);
            else if(s2.size()) s2.pop_back();

        return s1 == s2;
    }
};
