/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsequences(nums: number[]): number[][] {
    const N: number = nums.length
    const res: number[][] = []
    const iterate = (idx: number, subs: number[]) => {
        const set = new Set()
        for(let i = idx; i < N; ++i){
            if(set.has(nums[i]) || subs.length > 0 && nums[i] < subs[subs.length - 1])
                continue
            set.add(nums[i])
            subs.push(nums[i])
            if(subs.length > 1)
                res.push([...subs])
            iterate(i + 1, subs)
            subs.pop()
        }
    }
    iterate(0, [])
    
    return res
};