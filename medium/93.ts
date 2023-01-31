function restoreIpAddresses(s: string): string[] {
    const res: string[] = []
    const N: number = s.length
    const valid = (str: string) => {
        const v: number = Number.parseInt(str)
        // has lead-0?
        if(v == Number.parseInt(str.substring(1))) return false
        return v >= 0 && v <= 255
    }
    const merge = (s1: string, s2: string) => {
        if(s1.length === 0) return s2
        return s1 + '.' + s2
    }
    const iterate = (ip: string, start: number, cnt: number) => {
        if(cnt === 4 && start == N) 
            res.push(ip)
        else   
            for(let i = 0; i < 3; ++i){
                const subs = s.substring(start, start + i + 1)
                if(valid(subs)) 
                    iterate(merge(ip, subs), start + i + 1, cnt + 1)
            }
    }
    iterate('', 0, 0)
    return res
};