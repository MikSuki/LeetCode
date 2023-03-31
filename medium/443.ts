function compress(chars: string[]): number {
    const apdCnt = () => {
        if(cnt == 1) return 
        if(cnt < 10) chars[p++] = cnt.toString()
        else{
            const apd: number[] = []
            while(cnt> 0){
                apd.push(cnt % 10)
                cnt  = ~~(cnt / 10)   
            }
            for(let j = apd.length - 1; j >= 0; --j)
                chars[p++] = apd[j].toString()
        }
    }
    let p = 1
    let cnt = 1
    let last = chars[0]
    for(let i = 1; i < chars.length; ++i){
        if(chars[i] == last) ++cnt
        else{
            apdCnt()
            last = chars[i]
            chars[p++] = last
            cnt = 1
        }
    }
    apdCnt()
    return p
};