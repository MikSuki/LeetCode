function new21Game(n: number, k: number, maxPts: number): number {
    if(k == 0 || n >= k + maxPts) 
        return 1
    
    let winSum = 1, prob = 0
    const dp = new Array(n + 1).fill(0)
    dp[0] = 1

    for(let i = 1; i <= n; ++i){
        dp[i] = winSum / maxPts
        if(i < k)
            winSum += dp[i]
        else
            prob += dp[i]

        if(i >= maxPts)
            winSum -= dp[i - maxPts]
    }

    return prob
};