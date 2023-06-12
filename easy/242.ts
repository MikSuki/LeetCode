function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false

    const arr: number[] = new Array(26).fill(0)
    for(let i = 0; i < s.length; ++i)
        arr[s[i].charCodeAt(0) - 97]++
    for(let i = 0; i < t.length; ++i)
        if(arr[t[i].charCodeAt(0) - 97]-- <= 0)
            return false
    return true
};