// 1578. Minimum Time to Make Rope Colorful
class Solution {
public:
    int minCost(string colors, vector<int>& neededTime) {
        vector<int> s;
        int res = 0;

        for(int i = 0; i < colors.size(); ++i){
            s.push_back(i);
            while(s.size() >= 2 && colors[s[s.size() - 1]] == colors[s[s.size() - 2]]){
                if(neededTime[s[s.size() - 1]] > neededTime[s[s.size() - 2]]){
                    res += neededTime[s[s.size() - 2]];
                    int tmp = s[s.size() - 1];
                    s.pop_back();
                    s.pop_back();
                    s.push_back(tmp);
                }
                else{
                    res += neededTime[s[s.size() - 1]];
                    s.pop_back();
                }
            }
        }

        return res;
    }
};
