/**
    問題: 
        給一array，除了某個數外，其他都剛好出現三次
        找出只出現一次的
    
    限制:
        Time: O(n)
        Space: O(1)

    方法:   
        輸入大小為0~2^32
        以二進制處理，把每個數的每個bit加起來
        最後模3，結果會剩下只出現一次的數(因為其他出現3次都整除3)

    時間:
        O(32n)

 */

function singleNumber(nums: number[]): number {
    const bits: number[] = new Array(32).fill(0)

    for (const n of nums)
        for (let i = 0; i < 32; ++i)
            bits[i] += (n >> i) & 1

    return bits.reduce((res, v, i) => res += (v % 3) << i, 0)
};