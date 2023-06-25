/**
    問題: 
        給一序列，表示城市兩兩之間到達對方所需花費的油量
        以及起點、終點和總油量
        
        求起點到終點最多的方法數(城市可重複)
        e.g
            1 -> 3
            1 -> 2 -> 3
            算兩種

    方法:
        dp==

        dp[f][i]: 已花費f的油量，且到達城市i的方法數
        初始狀態: dp[0][start] = 1 (一種方法)

    時間:
        O(fuel * |locations|)

 */

function countRoutes(locations: number[], start: number, finish: number, fuel: number): number {
    const MOD: number = 1e9 + 7
    const n: number = locations.length
    const dp: number[][] = []
    let output: number = 0
    // init array
    for (let i = 0; i <= fuel; ++i) {
        const arr = []
        for (let j = 0; j < n + 1; ++j) {
            arr.push(0)
        }
        dp.push(arr)
    }
    dp[0][start] = 1

    for (let f = 1; f <= fuel; ++f) {
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                const cost: number = Math.abs(locations[i] - locations[j])
                if (i == j) continue
                if (f - cost >= 0)
                    dp[f][j] = (dp[f][j] + dp[f - cost][i]) % MOD
            }
        }
    }

    for (let f = 0; f <= fuel; ++f)
        output = (output + dp[f][finish]) % MOD


    return output

};