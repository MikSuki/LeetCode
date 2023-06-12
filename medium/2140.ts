function mostPoints(questions: number[][]): number {
    const n: number = questions.length
    const dp: number[] = new Array(n).fill(0)
    let lmax: number = 0
    let max: number = 0

    for(let i = 0; i < n; ++i){
        const next = i + questions[i][1] + 1
        lmax = Math.max(lmax, dp[i])
        if(next < n){
            dp[next] = Math.max(dp[next], lmax + questions[i][0])
            max = Math.max(max, dp[next])
        }
        else
            max = Math.max(max, lmax + questions[i][0])
    }

    console.log(dp)

    return max
};