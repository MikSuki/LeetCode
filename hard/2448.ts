/**
    問題:
        給兩個array，nums和cost
        operation: 讓nums的某個元素+1或-1
        要使nums所有元素都相同且總共花費的cost最小
    
    思路:
        一定是變成nums中出現過的元素
        e.g. 
            nums = [2, 4], cost = [x, y]
            變2: total cost = 2y
            變3: total cost = x+y
            變4: total cost = 2x
            x+y < 2y && x+y < 2x
            => x < y && y < x (不可能)
        
    方法:
        根據nums排序
        算出換成每個元素所需的cost，分左和右
        最後找最小即可

    時間: 
        O(nlogn + n) = O(nlogn)

 */
        function minCost(nums: number[], cost: number[]): number {
            let min: number = Number.MAX_SAFE_INTEGER
            const n: number = nums.length
            const arr: number[][] = Array.from({length: n}, (_, i) => [nums[i], cost[i]])
            arr.sort((a, b) => a[0] - b[0])
            const costSum: number[] = new Array(n+1).fill(0)    
            for(let i = 0; i < n; ++i)
                costSum[i+1] = costSum[i] + arr[i][1]
            // 把左側都換成arr[i].num的cost
            const left: number[] = new Array(n).fill(0)
            for(let i = 1; i < n; ++i)
                left[i] = left[i-1] + costSum[i] * (arr[i][0] - arr[i-1][0])
            // 把右側都換成arr[i].num的cost
            const right: number[] = new Array(n).fill(0)
            for(let j = n-2; j >= 0; --j)
                right[j] = right[j+1] + (costSum[n] - costSum[j+1]) * (arr[j+1][0]- arr[j][0])
            for(let i = 0; i < n; ++i){
                const s: number = left[i] + right[i]
                min = Math.min(min, s)
            }
        
            return min
        };
        
        // 1 2 3 5
        // 