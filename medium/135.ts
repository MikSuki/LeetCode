/**
  135. Candy
 */
function candy(ratings: number[]): number {
    const MAX: number = ratings.reduce((max: number, v: number) => Math.max(max, v), 0)
    const n: number = ratings.length
    const candies: number[] = new Array(n).fill(1)
    const pos: number[][] = new Array(MAX + 1).fill(0).map(() => [])
    for (let i = 0; i < n; ++i) {
        const cur: number = ratings[i]
        let j: number = i + 1
        while (ratings[j] == cur)
            ++j
        pos[ratings[i]].push(i, j - 1)
        i = j - 1
    }

    for (let i = 1; i <= MAX; ++i) {
        if (pos[i].length == 0) continue
        pos[i].forEach(p => {
            const m1: number = ratings[p] > ratings[p - 1] ? candies[p - 1] + 1 : 1
            const m2: number = ratings[p] > ratings[p + 1] ? candies[p + 1] + 1 : 1
            candies[p] = Math.max(m1, m2)
        })
    }

    return candies.reduce((acc: number, v: number) => acc + v, 0)
};