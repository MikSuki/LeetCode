class Solution {
public:
    string countAndSay(int n) {
        vector<string> dp{"1"};
        for(int i = 1; i < n; ++i){
            string count = dp[i-1],
                say = "";
            for(int j = 0; j < count.size(); ++j){
                int idx = j;
                while(count[j+1] == count[j]) ++j;
                say += to_string((j - idx + 1))  + count[idx];
            }
            dp.push_back(say);
        }
        return dp[n-1];
    }
};      