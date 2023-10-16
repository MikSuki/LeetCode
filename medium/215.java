/**
    215. Kth Largest Element in an Array

    counting sort approach

    Time complexity: O(n + k)
    Space complexity: O(k)
    n = |nums|, k = 200001
 */
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int offset = 10000;
        int N = offset * 2 + 1;
        int[] cnt = new int[N];

        for(int i = 0; i < N; ++i)
            cnt[i] = 0;
        
        for(int num : nums)
            cnt[num + offset]++;
        
        int j = 0;
        for(int i = N - 1; i >= 0; --i){
            j += cnt[i];
            if(j >= k) return i - offset;
        }

        return -1;
    }
}
