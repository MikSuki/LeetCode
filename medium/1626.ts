function bestTeamScore(scores: number[], ages: number[]): number {
    interface player{
        sco: number,
        age: number
    }
    // sort data
    const data: player[] = []
    ages.forEach((age, i) => data.push({sco: scores[i], age: age}))
    data.sort((a, b) => a.age == b.age ? a.sco - b.sco : a.age - b.age)
    // cal output
    const dp: number[] = []
    let output = 0
    data.forEach(e => {
        dp.push(e.sco)
        output = Math.max(output, e.sco)
    })
    for(let i = 1; i < data.length; ++i){
        for(let j = i - 1; j >= 0; --j){
            if(data[j].sco <= data[i].sco)
                dp[i] = Math.max(dp[i], dp[j] + data[i].sco)
        }
        output = Math.max(output, dp[i])
    }

    return output
}