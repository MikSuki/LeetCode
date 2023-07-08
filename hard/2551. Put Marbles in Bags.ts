/**
    問題:
        給一個array和k值
        分成k個區間頭尾的sum
        求最大和最小的差值
    
    方法:   
        k=3的話，可以想像成↓
                     1|35|23|4

        sum 為 1 +(1+3) + (5+2) + (3+4) + 4
        然後可以發現頭尾的1和4不管怎麼切都會存在
        而答案求差值，所以可以不記

        總結
        1. 算出每個相鄰的合
        2. 排序(本來覺得疑惑，但順序早就不重要了，又不會重疊==)
        3. sum(前k-1個最大) - sum(前k-1個最小)

    時間:
        O(n)
 */

function putMarbles(weights: number[], k: number): number {
    if(weights.length == k) return 0

    const n: number = weights.length
    const w: number[] = new Array(n - 1).fill(0)
    let res: number = 0
    for(let i = 0; i < n - 1; ++i)
        w[i] = weights[i] + weights[i + 1]

    // console.log(w)
    w.sort((a, b) => a - b)
    // console.log(w)
    for(let i = 0; i < k - 1; ++i)
        // console.log(w[n - 2 - i], w[i])
        res += w[n - 2 - i] - w[i]

    return res
};
