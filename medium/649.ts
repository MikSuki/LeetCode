function predictPartyVictory(senate: string): string {
    const qr: number[] = []
    const qd: number[] = []
    const n: number = senate.length

    for(let i = 0; i < n; ++i)
        senate[i] == 'R' ? qr.push(i) : qd.push(i)
    while(qr.length && qd.length){
        let fr: number = qr.shift()
        let fd: number = qd.shift()
        fr < fd ? qr.push(fr + n) : qd.push(fd + n)
    }

    return qd.length == 0 ? 'Radiant' : 'Dire'
};