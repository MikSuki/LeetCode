function findAnagrams(s: string, p: string): number[] {
    const need: number[] = new Array(26).fill(0)
    const window: number[] = new Array(26).fill(0)
    let cnt: number = 0
    const size: number = p.length
    const base: number = 97 // ASCII of 'a' 
    const output: number[] = []
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
    p.split('').forEach(ch => ++need[ch.charCodeAt(0) - base])
    // sliding window
    for(let i = 0; i < s.length; ++i){
        if(i >= size) delOne(s[i - size])
        addOne(s[i])
        if(cnt == size) output.push(i - size + 1)
    }
    return output
};
