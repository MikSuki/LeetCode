function longestStrChain(words: string[]): number {
    const sorted: string[][] = new Array(17)
    const map: Map<string, string[]> = new Map()
    for (let i = 1; i <= 16; ++i)
        sorted[i] = []
    words.forEach(word => { sorted[word.length].push(word) })
    for (let i = 1; i <= 15; ++i) {
        sorted[i].forEach(str => {
            const next: string[] = sorted[i + 1]
            const arr: string[] = []
            for (let j = 0; j < next.length; ++j) {
                if (check(str, next[j]))
                    arr.push(next[j])
            }
            map.set(str, arr)
        })
    }
    let res: number = 0
    let start: number = 1
    while (res < 16 - start + 1) {
        sorted[start].forEach(str => dfs(start, start + 1, str))
        start++
    }
    return res

    function check(s1: string, s2: string): boolean {
        const m: number = s1.length, n: number = s2.length
        let i: number = 0, j: number = 0, k: number = 1
        while (i < m && k >= 0) {
            if (s1[i] != s2[j]) {
                --i
                --k
            }
            ++i
            ++j
        }
        return k == 0 || (k == 1 && j == n - 1)
    }

    function dfs(start: number, i: number, chosed: string) {
        res = Math.max(res, i - start)
        if (i > 16 || sorted[i].length == 0) return
        const arr: string[] = map.get(chosed)
        arr.forEach(s => dfs(start, i + 1, s))
    }
};
