/**
 * 給定一組可移動的步數，判斷是否能走到最後一格
 * 一個變數記著目前最大能動的步數
 * 如果還沒到終點就變0的話即失敗
 * 否則，ok
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let cur_steps = nums[0]
    for (let i = 0; i < nums.length - 1; ++i) {
        cur_steps = Math.max(cur_steps - 1, nums[i])
        if (cur_steps === 0) return false
    }
    return true
};