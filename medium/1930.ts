/**
    # 1930. Unique Length-3 Palindromic Subsequences

    找所有長度為3的回文子序列

    針對所有出現字元的最外圍
    找它們中間有幾個不重複的字元
 */
function countPalindromicSubsequence(s: string): number {
    let res: number = 0;
    
    for(const c of new Set(s)){
        const [start, end] = [s.indexOf(c), s.lastIndexOf(c)];
        if(end - start < 2) continue;
        res += new Set(s.slice(start + 1, end)).size;
    }

    return res;
};
