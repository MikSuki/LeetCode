/**
    239. Sliding Window Maximum
*/

function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque: number[][] = []
    const last = (arr: number[][]) => arr[arr.length - 1]
    const res: number[] = []

    for (let i = 0; i < nums.length; ++i) {
        while (deque.length && last(deque)[0] < nums[i])
            deque.pop()
        deque.push([nums[i], i])

        if (i - deque[0][1] >= k)
            deque.shift()

        if (i >= k - 1)
            res.push(deque[0][0])
    }

    return res
};