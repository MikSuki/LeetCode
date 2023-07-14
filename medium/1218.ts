/**
    題目:
        1218. Longest Arithmetic Subsequence of Given Difference

    問題:
        給一array和diff，找Longest Arithmetic Subsequence
        Longest Arithmetic Subsequence: longest subsequence滿足相鄰元素中，後面-前面都相等
        而此題要求 = diff

    方法:
        建一個map<ending, LAS length>，記錄個結尾的長度
        遍歷arr，假設當前值=k
            1. map有k-diff的結尾，k接到他後面(長度+1)
            2. 否則，k自己當答案(長度=1)

    時間:
        O(n)

 */

        function longestSubsequence(arr: number[], difference: number): number {
            const map: Map<number, number> = new Map()
            let res: number = 0
        
            arr.forEach(e => {
                let cnt: number = (map.get(e - difference) || 0) + 1
                map.set(e, cnt)
                res = Math.max(res, cnt)
            })
        
            return res
        };