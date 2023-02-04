function checkInclusion(s1: string, s2: string): boolean {
    if(s1.length > s2.length) return false
    const need: number[] = new Array(26).fill(0)
    const window: number[] = new Array(26).fill(0)
    let cnt: number = 0
    const size: number = s1.length
    const base: number = 97 // ASCII of 'a' 
    const addOne = (ch: string) => {
        const code = ch.charCodeAt(0) - base
        if(need[code] != 0) {
            ++window[code]
            if(window[code] <= need[code])
                ++cnt
        }
    }
    const delOne = (ch: string) => {
        const code = ch.charCodeAt(0) - base
        if(window[code] > 0){
            -- window[code]
            if(window[code] < need[code])
                --cnt
        }
    }
    s1.split('').forEach(ch => ++need[ch.charCodeAt(0) - base])
    // sliding window
    for(let i = 0; i < s2.length; ++i){
        if(i >= size) delOne(s2[i - size])
        addOne(s2[i])
        if(cnt == size) return true
    }
    return false
};