function buildArray(target: number[], n: number): string[] {
    const res: string[] = [];
    let j: number = 0;

    for(let i = 0; i < target.length; ++i){
        while(++j < target[i])
            res.push('Push', 'Pop');
        res.push('Push');
    }

    return res;
};
