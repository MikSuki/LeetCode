/**
    問題:
        2789. Largest Element in an Array after Merge Operations
    
    描述:
        給一串數字，求使用多個 merge後元素最大值

        merge:
            如果元素i 比 元素i-1 小，可以將兩者相加，剩下相加元素

    方法:
        greedy

        因為只看相鄰，而加法只會單調遞增
        所以從陣列尾巴開始，掃描到陣列開頭，只要能加就加

    時間:
        O(n)

 */


function maxArrayValue(nums: number[]): number {
    let i = nums.length - 1
    while (i > 0) {
        if (nums[i] >= nums[i - 1])
            nums[i - 1] += nums[i]
        --i
    }
    return nums.reduce((max, v) => Math.max(max, v), 0)
};