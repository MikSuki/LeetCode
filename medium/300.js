/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const arr = [nums[0]],
        len = nums.length,
        getInsrPos = (v, len, arr) => {
            let l = 0, r = len - 1;

            while (l !== r) {
                let m = ~~((l + r) / 2);
                if (v > arr[m]) l = m + 1;
                else r = m;
            }
            return l;
        };
    let LIS = 1;

    for (let i = 1; i < len; ++i) {
        let pos = getInsrPos(nums[i], LIS, arr);
        if (pos < LIS - 1)
            arr[pos] = nums[i];
        else {
            arr.push(nums[i]);
            ++LIS;
        }
    }

    return LIS;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
lengthOfLIS([0, 1, 0, 3, 2, 3]);
lengthOfLIS([7, 7, 7, 7, 7, 7, 7]);
lengthOfLIS([4, 10, 4, 3, 8, 9]);
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))