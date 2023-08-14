/**
    215. Kth Largest Element in an Array

    方法:   
        counting sort
        輸入有負數，所以要調成從0開始(減掉min)
 */

function findKthLargest(nums: number[], k: number): number {
    const min = nums.reduce((min, v) => Math.min(min, v), 100001)
    const max = nums.reduce((max, v) => Math.max(max, v), 0)
    const count: number[] = new Array(max - min + 1).fill(0)
    nums.forEach(v => count[v - min]++)

    let i = count.length - 1
    while (i >= 0) {
        k -= count[i]
        if (k <= 0) return i + min
        --i
    }

    return -1
};