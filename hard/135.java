/**
    135. Candy
 */
class Solution {
    public int candy(int[] ratings) {
        final int n = ratings.length;
        int need[] = new int[n];
        Arrays.fill(need, 1);

        for(int i = 1; i < n; ++i)
            if(ratings[i] > ratings[i - 1])
                need[i] = need[i - 1] + 1;
        
        for(int i = n - 2; i >= 0; --i)
            if(ratings[i] > ratings[i + 1])
                need[i] = Math.max(need[i], need[i + 1] + 1);

        int res = 0;
        for(int i = 0; i < n; ++i)
            res += need[i];
        return res;
    }
}
