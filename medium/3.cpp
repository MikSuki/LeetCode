/**
    # 3. Longest Substring Without Repeating Characters
*/
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
       unordered_map<char, int> map; 
       int res = 0;
       int start = 0;

       for(int i = 0; i < s.size(); ++i){
           if(map.count(s[i]) == 0 || map[s[i]] < start)
                res = max(res, i - start + 1);
           else
               start = map[s[i]] + 1;
            map[s[i]] = i;
       }

       return res;
    }
};
