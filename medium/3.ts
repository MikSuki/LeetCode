/**
    3. Longest Substring Without Repeating Characters
 */
function lengthOfLongestSubstring(s: string): number {
    const map: Map<string, number> = new Map()
    let l: number = 0
    let ans: number = 0

    for (let r = 0; r < s.length; ++r) {
        const pos: number = map.get(s[r])
        if (pos != undefined)
            l = Math.max(l, pos + 1)
        map.set(s[r], r)
        ans = Math.max(ans, r - l + 1)
    }
    return ans
};