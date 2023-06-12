function maxValue(n: number, index: number, maxSum: number): number {
    const f = (max: number, range: number) => {
        const min = max - range + 1
        if(min < 1){
            const j = 1 - min
            range -= j
            return (1 + max) * range / 2 + j
        }
        return (min + max) * range / 2 
    }

    // binary search
    const il = index + 1, ir = n - index - 1
    let l = 1, r = maxSum, m, sum, res
    while(l <= r){
        m = ~~((l + r) / 2)
        sum = f(m, il) + f(m - 1, ir)
        if (sum <= maxSum) {
            l = m + 1
            res = m
        }
        else r = m - 1
    }

    return res
};

// 4, 2, 1500000
// 37499 37500 375001 37500
// 0 1 2 3

// 5 4 3 2 1 0 -1 -2
// 5 4 3 2 1 1  1  1
// 4 3 2 1 1 1  1  1


// 2 3 4 3
