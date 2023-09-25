/**
    389. Find the Difference
 */
function findTheDifference(s: string, t: string): string {
    const a1: number[] = new Array(26).fill(0)
    const a2: number[] = new Array(26).fill(0)
    for(const c of s)
        a1[c.charCodeAt(0) - 97]++
    for(const c of t)
        a2[c.charCodeAt(0) - 97]++
    for(let i = 0; i < 26; ++i)
        if(a1[i] != a2[i])
            return String.fromCharCode(i + 97)
};
