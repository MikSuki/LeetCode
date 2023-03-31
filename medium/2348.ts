function zeroFilledSubarray(nums: number[]): number {
    const zeros: number[] = []
    const dp: number[] = [0] 
    let cnt = 0
    const append = () => {
        while(zeros.length < cnt + 1)
                zeros.push(0)
            zeros[cnt]++
    }

    for(let i = 0; i < nums.length; ++i){
        if(nums[i] == 0) ++ cnt
        else{
            append()
            cnt = 0
        }
    }
    append()
    cnt = 1
    while(dp.length < zeros.length){
        dp.push(dp[cnt - 1] + cnt)
        ++cnt
    }

    return zeros.reduce((acc, v, i) => acc += v * dp[i], 0)
};