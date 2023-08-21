function repeatedSubstringPattern(s: string): boolean {
    const n: number = s.length
    const m: number = n / 2
    const combine = (len: number) => {
        if (n % len) return false
        let i: number = 0
        while (i < n) {
            for (let j = 0; j < len; ++j)
                if (s[i + j] != s[j]) return false
            i += len
        }
        return true
    }
    for (let i = 1; i <= m; ++i)
        if (combine(i))
            return true

    return false
};