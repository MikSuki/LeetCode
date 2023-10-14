/**
    125. Valid Palindrome
*/
class Solution {
public:
    bool isPalindrome(string s) {
        int l = 0, r = s.size() - 1;
        while(l < r){
            while(!isAlp(s[l]) && l < r)
                ++l;
            while(!isAlp(s[r]) && l < r)
                --r;
            if(l < r && tolower(s[l]) != tolower(s[r]))
                return false;
            ++l;
            --r;
        }
        return true;
    }

    bool isAlp(char c){
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
    }
};
