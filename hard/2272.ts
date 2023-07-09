/**
問題:
    給一個字串
    在所有substring中求一最大的長度，而此長度為某兩字元出現次數相減

方法:
    使用Kadane’s algorithm的變形
    這個演算法是求subarray最大的和
    換在此題當中，因為只找某兩字元，可以把這兩字元分別當作1(add)和-1(sub)，另外其餘為0
    然後再求maximum sum

    不過要注意的是，找到的substring未必包含兩字元(負的會被丟掉)，所以要特別記錄sub的次數，不等於0才能更新結果
    且當sub>add且後面確定還有sub時，才可以把add和sub清空

時間:
    O(n*26^2)

*/

function largestVariance(s: string): number {
    let res: number = 0
    const cnts: number[] = new Array(26).fill(0)
    for (const c of s)
        cnts[c.charCodeAt(0) - 97]++

    for (let i = 0; i < 26; ++i) {
        for (let j = 0; j < 26; ++j) {
            if (i == j || cnts[i] == 0 || cnts[j] == 0) continue
            const add = String.fromCharCode(97 + i)
            const sub = String.fromCharCode(97 + j)
            let cntAdd = 0
            let cntSub = 0
            let restSub = cnts[j]

            for (let k = 0; k < s.length; ++k) {
                if (s[k] == add)
                    ++cntAdd
                else if (s[k] == sub) {
                    ++cntSub
                    --restSub
                }

                if (cntSub > 0)
                    res = Math.max(res, cntAdd - cntSub)

                if (restSub  > 0 && cntAdd < cntSub) {
                    cntAdd = 0
                    cntSub = 0
                }
            }

        }
    }

    return res
};