function mergeAlternately(word1: string, word2: string): string {
    let res = ''
    let i = 0
    const min = Math.min(word1.length, word2.length)
    while(i < min)
        res += word1[i] + word2[i++]
    if(i == word1.length) return res + word2.substring(i)
    return res + word1.substring(i)
};