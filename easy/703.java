class KthLargest {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>();
    int k;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        for(int i = 0; i < nums.length; ++i)
            maxHeap.add(nums[i]);
    }
    
    public int add(int val) {
        maxHeap.offer(val);
        while(maxHeap.size() > this.k)
            maxHeap.poll();
        return maxHeap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */