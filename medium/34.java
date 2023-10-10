/**
    # 34. Find First and Last Position of Element in Sorted Array
 */
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] res = new int[] {-1, -1};
        res[0] = lowerBound(nums, target, 0, nums.length - 1);
        if(res[0] >= nums.length || nums[res[0]] != target) 
            res[0] = -1;
        else
            res[1] = upperBound(nums, target, res[0], nums.length - 1);

        return res;
    }

    private int lowerBound(int[] nums, int target, int l, int r) {
        while(l < r){
            int m = (l + r) / 2;
            if(nums[m] >= target)
                r = m;
            else
                l = m + 1;
        }
        return l;
    }

    private int upperBound(int[] nums, int target, int l, int r) {
        while(l < r){
            int m = (l + r + 1) / 2;
            if(nums[m] <= target)
                l = m;
            else
                r = m - 1;
        }
        return l;
    }
}
