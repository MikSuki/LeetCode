// 91. Decode Ways

class Solution {
public:
    int numDecodings(string s) {
        int res = 0;
        int n = s.size();
        vector<int> dp(n, 0);

        if(check1(s[n-1])) dp[n-1] = 1;
        if(s.size() == 1) return dp[0];

        if(check2(s[n-2], s[n-1])) dp[n-2] = 1;
        if(check1(s[n-2]) && check1(s[n-1])) ++dp[n-2];
        
        for (int i = n - 3; i >= 0; --i){
            if(check1(s[i])) dp[i] += dp[i + 1];
            if(check2(s[i], s[i+1])) dp[i] += dp[i + 2];
        }

        return dp[0];
    }

private:
    bool check1(char c){
        return c >= '1' && c <= '9';
    }

    bool check2(char c1, char c2){
        return c1 == '1' || (c1 == '2' && c2 >= '0' && c2 <= '6');
    }
};
