/**
 * 找左右半邊公差絕對值最小的
 * 先算第一個左右半邊
 * 再滑過去看即可
 * time complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
 var minimumAverageDifference = function(nums) {
    const len = nums.length;
    const getAD = i => Math.abs(~~(left / i) - ~~(right / (len - i)));
    let left = nums[0];
    let right = nums.reduce((v, acc) => acc += v, 0) - left;
    let min = {idx: 0, ad: getAD(0 + 1)};
    for(let i = 1; i < len; ++i){
        left += nums[i];
        right -= nums[i];
        const ad = getAD(i + 1);
        if(ad < min.ad){
            min.ad = ad;
            min.idx = i;
        }
    }
    return min.idx;
};