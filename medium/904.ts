function totalFruit(fruits: number[]): number {
    interface element{
        v: number,
        cnt: number
    }
    if(fruits.length < 2) return 1
    const n = fruits.length
    let l = 0
    //let r = 0
    let k1: element = { v: fruits[0], cnt: 1 }
    let k2: element = { v: -1, cnt: 0}
    let output = 1

    for(let r = 1; r < n; ++r){
        if(fruits[r] == k1.v) k1.cnt++
        // not init k2 yet
        else if(k2.v == -1)
            k2 = { v: fruits[r], cnt: 1 }
        else if(fruits[r] == k2.v) k2.cnt++
        // appear the third value
        else{
            output = Math.max(output, k1.cnt + k2.cnt)
            // until delete one value
            while(k1.cnt != 0 && k2.cnt != 0){
                if(fruits[l] == k1.v) --k1.cnt
                else --k2.cnt
                ++l
            }
            if(k1.cnt == 0) {k1.v = fruits[r]; k1.cnt = 1}
            else {k2.v = fruits[r]; k2.cnt = 1}
        }
    }
    return Math.max(output, k1.cnt + k2.cnt)
};