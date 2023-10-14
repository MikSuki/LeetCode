/**
    # 76. Minimum Window Substring
*/
class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> map;
        int cnt = t.size();
        int l = 0;
        int start = 0;
        int len = INT_MAX;

        for(char c : t)
            ++map[c];

        for(int r = 0; r < s.size(); ++r){
            if(map[s[r]] > 0)
                --cnt;
            --map[s[r]];

            while(cnt == 0){
                if(r - l + 1 < len){
                    len = r - l + 1;
                    start = l;
                }
                if(map[s[l]] >= 0)
                    ++cnt;
                map[s[l]]++;
                ++l;
            }
        }

        return len == INT_MAX ? "" : s.substr(start, len);
    }
};
