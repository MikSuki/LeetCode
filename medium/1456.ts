function maxVowels(s: string, k: number): number {
    const vowel: Set<string> = new Set(['a', 'e', 'i', 'o', 'u'])
    let max: number = 0
    let win: number = 0
    // sliding window
    for(let i = 0; i < s.length; ++i){
        if(vowel.has(s[i]))
            ++win
        if(i >= k && vowel.has(s[i - k]))
            --win
        max = Math.max(max, win)
    }

     return max
};