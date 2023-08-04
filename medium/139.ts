/**
    題目:
        139. Word Break

    描述:
        給一堆字串wordDist，和一目標字串s
        判斷能不能用wordDist的字串組出s

    方法:
        Trie + bottom-up dp

        1. 先建立字典樹，字串終點用end來記錄
        2. dp[n-1] ~ dp[0]
            每次判斷能不能組出 dp[i]
            當走到字典樹的某個字串終點時，看能不能皆在 dp[i+1] 前面
            不行就再往下走，直到leave              

    時間:   
        O(|wordDict| * |word| + |s|^2)
 */

interface Dict {
    [key: string]: Dict
}

function wordBreak(s: string, wordDict: string[]): boolean {
    const dist: Dict = {}

    wordDict.forEach(s => {
        let cur: Dict = dist
        for (const c of s) {
            if (cur[c] == undefined)
                cur[c] = {}
            cur = cur[c]
        }
        cur['end'] = {}
    })

    const n: number = s.length
    const dp: boolean[] = new Array(n).fill(false)

    for (let i = s.length - 1; i >= 0; --i)
        dp[i] = has(i, dist)

    return dp[0]

    function has(i: number, dict: Dict): boolean {
        if (dict['end'] != undefined && (i >= n || dp[i])) return true
        if (i >= n) return false
        if (dict[s[i]] == undefined) return false
        return has(i + 1, dict[s[i]])
    }
};