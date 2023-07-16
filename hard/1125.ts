/**
    題目:
        1125. Smallest Sufficient Team

    
    問題:
        req_skills[0..m] -> 總共需要的技能
        people[0..n]     -> 每個擁有的技能

        找出最少的人，滿足req_skills
        而回傳的是全部用的人


    方法:
        dp==

        dp[i] = j -> 擁有i(bitmask)個skills 最少須 k 個人

        for(i of people)
            for(j of bitmask)
                如果當前的j已有，就看能不能更新 dp[j | masks[i]] (更新當然是找 min)
        
    時間:   
        O(2^m * n)

 */

function smallestSufficientTeam(req_skills: string[], people: string[][]): number[] {
    const m: number = req_skills.length, n: number = people.length
    const M: number = 1 << m
    const dp: number[] = new Array(M).fill(999)
    const members: number[][] = new Array(M).fill(0).map(() => [])
    const map: Map<string, number> = new Map()
    const masks: number[] = new Array(n).fill(0)

    req_skills.forEach((s, i) => map.set(s, i))
    people.forEach((skills, i) => {
        masks[i] = skills.reduce((acc, v) => acc | (1 << map.get(v)), 0)
    })
    dp[0] = 0

    for (let i = 0; i < n; ++i) {
        const mask: number = masks[i]

        for (let j = 0; j < M; ++j) {
            if (dp[j] == 999) continue
            const or: number = j | mask

            if (dp[j] + 1 < dp[or]) {
                dp[or] = dp[j] + 1
                members[or] = members[j].slice()
                members[or].push(i)
            }
        }
    }

    return members[M - 1]
};