/*
    問題: 
        給一序列和一整數k，找出所以點以k為半徑的總和平均，
        而當前半或後半不到k個數時，直接存-1
    
    方法:
        先算prefix sum
        再一個迴圈計算
    
    時間:   
        O(|nums|)
*/

// 0 1 2 ... a ... n
// a+1 = k
// a = k - 1

// i = n-1


function getAverages(nums: number[], k: number): number[] {
    const n: number = nums.length
    const divide: number = 2 * k + 1
    const prefixSum: number[] = new Array(n+1).fill(0)
    const res: number[] = new Array(n).fill(-1)
    // calculate prefix sum
    for(let i = 0; i < nums.length; ++i)
        prefixSum[i+1] = prefixSum[i] + nums[i]
    // calculate res
    let i: number = k
    while(i - k >= 0 && i + k < n){
        res[i] = ~~((prefixSum[i + k + 1] - prefixSum[i-k]) / divide)
        ++i
    }

    return res

};