/**
    題目:
        33. Search in Rotated Sorted Array

    描述:
        給一個sorted array，裡面有一個pivot k
        使得nums[k] < nums[k + 1] < ... < nums[i] < nums[2] < ... < nums[k-1]

    方法:
        binary search

        可以知道array要馬是一個上升段或兩個上升段組成
        每次算出 m = (l + r) / 2 後
        根據nums[m] 和 nums[l], nums[r] 的關係可知：
            左半邊或右半邊是完全sorted array
        再往下去做即可


    時間:
        O(nlogn)

 */

function search(nums: number[], target: number): number {
    const n: number = nums.length
    let l: number = 0, r: number = n - 1
    while (l <= r) {
        const m: number = l + ~~((r - l + 1) / 2)

        if (nums[m] == target) return m
        if (nums[m] >= nums[l]){
            if(target >= nums[l] && target < nums[m])
                r = m - 1
            else 
                l = m + 1
        }
        else {
            if(target <= nums[r] && target > nums[m])
                l = m + 1
            else 
                r = m - 1
        }
    }

    return -1
};
