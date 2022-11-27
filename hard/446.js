/**
 * 找具有等差性質的subsequence，且長度需>=3
 * 用 n 個 map記錄以 nums[i]當結尾的各種 different 之數量
 * 
 * 原本遇到的問題：怎麼滿足長度需>=3 ??
 * 長度 = 2時，加上去的還不會被加入 ans
 * 而在長度 >= 3時，此時才被加入 ans
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    const maps = new Array(n).fill(null).map(() => new Map());
    const getVal = (map, key) => {const v = map.get(key); return v === undefined ? 0 : v;};
    let ans = 0;
    for(let i = 0; i < n; ++i){
        for(let j = 0; j < i; ++j){
            const diff = nums[i] - nums[j];
            const sum = getVal(maps[j], diff);
            const ori_v = getVal(maps[i], diff);
            ans += sum;
            maps[i].set(diff, ori_v + sum + 1);
        }
    }
    return ans;
};
