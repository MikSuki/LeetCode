/**
    767. Reorganize String
 */

function reorganizeString(s: string): string {
    const count: number[] = new Array(26).fill(0)
    for (const c of s)
        count[c.charCodeAt(0) - 97]++

    let maxCount = count[0]
    let max = 0
    for (let i = 1; i < 26; ++i)
        if (count[i] > maxCount) {
            maxCount = count[i]
            max = i
        }

    const n = s.length

    if (maxCount > Math.ceil(n / 2)) return ''

    let pos = 0
    const res: string[] = new Array(n).fill('-')
    for (let i = 0; i < count[max]; ++i) {
        res[pos] = String.fromCharCode(max + 97)
        pos += 2
    }
    count[max] = 0

    for (let i = 0; i < 26; ++i) {
        while (--count[i] >= 0) {
            if (pos >= n) pos = 1
            res[pos] = String.fromCharCode(i + 97)
            pos += 2
        }
    }

    return res.join('')
};