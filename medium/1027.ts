/**
    問題:
        給一串序列，找Longest Arithmetic Subsequence(最長且任意兩相鄰元素的後者減前者都相同)
    
    方法:
        建一個Map<gap, length>陣列，存的是以nums[i]結尾，能和元素0~i-1建出的Arithmetic Subsequence之長度。
        兩層loop即可。
        
    時間:
        O(n^2)

 */

        function longestArithSeqLength(nums: number[]): number {
            const n: number = nums.length
            //           <gap, length>
            const dp: Map<number, number>[] = Array.from({length: n}, () => new Map<number, number>())
            let res: number = 1
        
            for(let r = 1; r < n; ++r){
                for(let l = r - 1; l >= 0; --l){
                    const gap: number = nums[r] - nums[l]
                    let len: number = dp[l].get(gap)
                    len = len == undefined ? 2 : len + 1
                    const ori = dp[r].get(gap)
                    if(ori == undefined || ori < len)
                        dp[r].set(gap, len)
                    res = Math.max(res, len)
                }
            }
         
            return res
        };