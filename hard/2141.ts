/**
    題目:
        2141. Maximum Running Time of N Computers
    
    描述:
        給一組電池，大小代表可以運行電腦多久
        每次可以任意交換電池，且用過仍能用
        求最多可以"同時"運行n台電腦幾分鐘

    方法:
        binary saerch
        任意猜時間k，接著判斷能不能運行這麼久

        而判斷的方式為: 加總 min(電池, k)，超過k的電池用不到

    時間:
        O(nlogk)
        # k = Number.MAX_SAFE_INTEGER
 */

function maxRunTime(n: number, batteries: number[]): number {
    let l: number = 0, r: number = Number.MAX_SAFE_INTEGER / 2 - 0.5

    while(l < r){
        const m: number = r - Math.floor((r - l) / 2)
        const f: boolean = helper(m)
        if(f) l = m
        else r = m - 1
    }

    return l

    function helper(k: number): boolean{
        let sum: number = 0

        for(let i = 0; i < batteries.length; ++i){
            sum += Math.min(batteries[i], k)
            if(sum >= k * n)
                return true
        }
        return false
    }   
};
