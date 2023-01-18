function minFlipsMonoIncr(s: string): number {
    let dp: number = 0,
        num1: number = 0

    for(const c of s)
        if(c == '0')
            dp = Math.min(dp + 1, num1)
        else
            ++num1

    return dp
};