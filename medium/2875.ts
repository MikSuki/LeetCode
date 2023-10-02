/**
    #2875. Minimum Size Subarray in Infinite Array

    #描述:
        給一個nums: Array<number>，和target: number。
        求最短的subarray之長度，其和等於target。
        而subarray可無限延伸

    # 方法:
        (1) 如果是不能無限延伸的版本，即在nums中找i, j，使得prefixSum[i] - prefixSum[j] = target

            XXXXXXXXXX
              j----i

            presum[i] - presum[j] = target
            presum[j] = presum[i] - target

            用map記錄每個prefixSum的位置


        (2) 可無限延伸版本，會多使用多少次完整的nums(total)

            所以會變成:
            XXXXXXXXX (~~~) (~~~) (~~~) (~~~) XXXXXXXXXX
                j-----------------------------i
            presum[i] - presum[j] + total * k = target
            presum[j] = presum[i] + total * k - target
            k = (presum[j] - presum[i] + target) / total
            res = i - j + k * n + 1

            跑兩次nums，因為答案中間可能有多次total
            每次迭代i，只要存在presum[j]，就可能是答案
            再用map記錄(prefix[i]%total)
   
    # tag:
        Hash
        PrefixSum
 */
function minSizeSubarray(nums: number[], target: number): number {
    const total: number = nums.reduce((acc, v) => acc + v, 0)
    const n: number = nums.length
    const presum = new Array(2 * n)
    for(let i = 0; i < n; ++i)
        nums.push(nums[i])
    presum[0] = nums[0]
    for(let i = 1; i < 2 * n; ++i)
        presum[i] = presum[i - 1] + nums[i]

    const map: Map<number, number> = new Map() // Map<v % total, index>
    map.set(0, -1)
    let res: number = Number.MAX_SAFE_INTEGER

    for(let i = 0; i < 2 * n; ++i){
        let j: number = map.get(((presum[i] - target) % total + total) % total)
        console.log(((presum[i] - target) % total + total) % total)
        if(j != undefined){
            const jj: number = j == -1 ? 0 : presum[j]
            const k: number = (jj - presum[i] + target) / total
            res = Math.min(res, i - j + k * n)
        }

        map.set(presum[i] % total, i)
    }

    return res == Number.MAX_SAFE_INTEGER ? -1 : res
};
