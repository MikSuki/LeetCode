function numSubseq(nums: number[], target: number): number {
    const MOD = 10 ** 9 + 7
    const n = nums.length
    const pows: number[] = new Array(n).fill(1)
    for(let i = 1; i < n; ++i)
        pows[i] = (pows[i - 1] * 2) % MOD
    let l = 0, r = n - 1
    let res = 0

    nums.sort((a, b) => a - b)

    while(l <= r){
        if(nums[l] + nums[r] > target)
            --r
        else{
            res = (res + pows[r - l]) % MOD
            ++l
        }
    }

    return res
};