/**
    問題: 給一個binary search tree的序列，找出其他能組出相同bst序列的數量

    思路:
        root為序列第一個，而左子樹和右子樹的序列順序都一致
        例如:
            [3,1,2,4,5]
            [3,1,4,2,5]
            [3,1,4,5,2]
            [3,4,1,2,5]
            [3,4,1,5,2]

            [1, 2] / [4, 5] 順序都一致

            而這時 [1, 2], [4, 5] 是C(4, 2)的問題
            因順序一致，只要找到某一邊的位置另一側也跟著決定好。
        所以左右兩邊又是子問題

        另外 C(n, k) = C(n-1, k-1) + C(n-1, k)

    方法: 
        分左右遞迴，得到left和right，和他們的相同bst的序列數|L|和|R|
        total = comb(|nums|, |left|) * |L| * |R|
    
    時間: O(n^2)

 */

 class Solution {
    private final int MOD = 1000000007;
    private long[][] comb = new long[1001][1001];

    public int numOfWays(int[] nums) {
        List<Integer> list = new ArrayList<>();
        for(int i = 0; i < 1001; ++i)
            for(int j = 0; j < 1001; ++j)
                comb[i][j] = -1;
        for (int num : nums) 
            list.add(num);
        return dfs(list) - 1;
    }

    private long getComb(int n, int k) {
        if(comb[n][k] != -1)
            return comb[n][k];
        if(k == 0)
            return 1;
        if(k == 1)
            return n;
        if(k > n - k)
            return getComb(n, n - k);
        comb[n][k] = (getComb(n - 1, k) + getComb(n - 1, k - 1)) % MOD;
        return comb[n][k];
    }

    private int dfs(List<Integer> nums){
        if(nums.size() <= 2)
            return 1;
        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();
        for(int i = 1; i < nums.size(); ++i)
            if(nums.get(i) < nums.get(0))
                left.add(nums.get(i));
            else
                right.add(nums.get(i));
        long lways = dfs(left);
        long rways = dfs(right);
        return (int) (getComb(nums.size() - 1, left.size()) * lways % MOD * rways % MOD);
    }
}