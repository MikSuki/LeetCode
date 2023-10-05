/**
    # 238. Product of Array Except Self
 */
class Solution {
    public int[] productExceptSelf(int[] nums) {
        final int n = nums.length;
        int[] prf = new int[n];
        int[] suf = new int[n];
        int[] res = new int[n];

        prf[0] = nums[0];
        suf[n - 1] = nums[n - 1];

        for(int i = 1; i < n; ++i)
            prf[i] = prf[i - 1] * nums[i];
        for(int i = n - 2; i >= 0; --i)
            suf[i] = suf[i + 1] * nums[i];
        for(int i = 1; i < n - 1; ++i)
            res[i] = prf[i - 1] * suf[i + 1];
        
        res[0] = suf[1];
        res[n - 1] = prf[n - 2];

        return res;
    }
}
