/**
    1561. Maximum Number of Coins You Can Get
*/
class Solution {
public:
    int maxCoins(vector<int>& piles) {
        sort(piles.begin(), piles.end());
        int n = piles.size();
        int res = 0;
        for(int i = n / 3; i < n; i += 2)
            res += piles[i];
        return res;
    }
};
