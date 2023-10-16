/**
    290. Word Pattern
*/
class Solution {
public:
    bool wordPattern(string pattern, string s) {
        unordered_map<char, string> map;
        unordered_map<string, char> map2;
        int i = 0;
        int k = 0;
        while(i < s.size()){
            int j = i;
            while(j < s.size() && s[j] != ' ')
                ++j;
            string str = s.substr(i, j - i);
            if((map[pattern[k]] != "" && str != map[pattern[k]]) || (map2[str] != 0 && map2[str] != pattern[k]))
                return false;
            else{
                map[pattern[k]] = str;
                map2[str] = pattern[k];
            }
            
            while(j < s.size() && s[j] == ' ')
                ++j;
            i = j;
            ++k;
        }
        return k < pattern.size() ? false : true;
    }
};
