function maxDepth(s: string): number {
    let res: number = 0;
    let d: number = 0;

    for(let i = 0; i < s.length; ++i){
        if(s[i] == '(') ++d;
        else if(s[i] == ')') --d;
        res = Math.max(res, d)
    }
    
    return res;
};
