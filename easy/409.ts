function longestPalindrome(s: string): number {
    const cnt: Map<string, number> = new Map()
    for (const c of s) {
        if (cnt.has(c))
            cnt.set(c, cnt.get(c) + 1)
        else
            cnt.set(c, 1)
    }

    let res: number = 0
    let odd = false

    for (const [key, val] of cnt) {
        if (val % 2) odd = true
        res += (val >> 1) << 1
    }

    return odd ? res + 1 : res
};