/**
    122. Best Time to Buy and Sell Stock II
 */
class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int res = 0;
        int min = prices[0];

        for(int i = 1; i < n; ++i){
            if(prices[i] > min)
                res += prices[i] - min;
            min = prices[i];
        }

        return res;
    }
}
