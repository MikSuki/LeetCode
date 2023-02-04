function isAlienSorted(words: string[], order: string): boolean {
    const dict: Map<string, number> = new Map()
    order.split('').forEach((e: string, i: number) => dict.set(e, i))
    const cmp = (s1: string, s2: string): boolean => {
        for(let i = 0; i < s1.length; ++i){
            const [o1, o2]: number[] = [dict.get(s1[i]), dict.get(s2[i])]
            if(i >= s2.length || o1 > o2) return false
            if(o1 < o2) return true
        }
        return true
    }
    for(let i = 1; i < words.length; ++i){
        if(!cmp(words[i - 1], words[i])) 
            return false
    }
    return true
};