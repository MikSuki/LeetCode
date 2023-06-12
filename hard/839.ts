function numSimilarGroups(strs: string[]): number { 
    const n: number = strs[0].length
    const G: Set<string[]> = new Set([[strs[0]]])

    for(let i = 1; i < strs.length; ++i){
        let tmp: string[] = null // temp of a group
        for(const group of G){
            for(let k = 0; k < group.length; ++k){
                if(similar(group[k], strs[i])){
                    if(tmp){
                        group.forEach(s => tmp.push(s))
                        G.delete(group)
                    }
                    else{
                        group.push(strs[i])
                        tmp = group
                    }
                    break
                }
            }
        }
        if(!tmp) G.add([strs[i]])
    }

    return G.size

    function similar(s1: string, s2: string): boolean{
        let d1: string, d2: string
        let c: number = 0
        for(let i = 0; i < n; ++i) {
            if(s1[i] != s2[i]){
                if(c == 0){
                    d1 = s1[i]
                    d2 = s2[i]
                }
                else if(c > 1 || (d1 != s2[i] || d2 != s1[i])){
                    return false
                }
                ++c
            }
        }
        return true
    }
};