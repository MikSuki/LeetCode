/**
    55. Jump Game
 */
class Solution {
    public boolean canJump(int[] nums) {
        int k = nums[0];
        for(int i = 1; i < nums.length; ++i){
            --k;
            if(k < 0) return false;
            k = Math.max(k, nums[i]);
        }
        return true;
    }
}
