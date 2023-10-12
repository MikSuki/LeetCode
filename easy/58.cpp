/**
    # 58. Length of Last Word
*/  
class Solution {
public:
    int lengthOfLastWord(string s) {
        int i = s.length() - 1;
        while(s[i] == ' ')
            --i;
        int tail = i;
        while(i >= 0 && s[i] != ' ')
            --i;
        return tail - i;
    }
};
