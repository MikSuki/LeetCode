// # 2125. Number of Laser Beams in a Bank

class Solution {
public:
    int numberOfBeams(vector<string>& bank) {
        int res = 0;
        int tmp = 0;
        
        for(string s : bank){
            int cur = 0;
            for(char c : s)
                cur += c - '0';
            
            if(cur == 0) continue;
            res += tmp * cur;
            tmp = cur;
        }

        return res;
    }
};
