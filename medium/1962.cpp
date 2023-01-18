class Solution {
public:
    int minStoneSum(vector<int>& piles, int k) {
        priority_queue<int> hp(piles.begin(), piles.end());
        int sum = accumulate(piles.begin(), piles.end(), 0);
        while(--k >= 0){
            int v = hp.top();
            int half = v / 2; // floor
            hp.pop();
            sum -= half;
            hp.push(v - half);
        }
        return sum;
    }
}