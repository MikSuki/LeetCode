/**
    問題:
        2790. Maximum Number of Groups With Increasing Length

    描述:
        給一個整屬陣列，代表著每個index可使用的次數
        找到最大的k，使得到一個groups，
        group由每種index組合而成，且須滿足
            1. group元素不重複
            2. 大小不相同 (三角形)

    方法:   
        排序

        理想的情況是剛好有1, 2, .., k，這樣剛好有k個groups
        但可能出現 2, 2, 2，此時可以有3個groups
            01
            12       
             20
        也就是說，可以把前面沒用到的保留到後面使用
        迭代 cnt，從最小值v開始增加group
        當v > cnt時，就可以把多餘的存到tmp
        否則，看加上tmp的值後夠不夠
            夠:  可見出新的cnt
            不夠: v存到tmp

    時間:
        O(nlogn)

 */

function maxIncreasingGroups(usageLimits: number[]): number {
    usageLimits.sort((a, b) => a - b)
    let cnt: number = 0
    let tmp: number = 0

    for (const u of usageLimits)
        if (u + tmp >= cnt + 1) {
            tmp += u - (cnt + 1)
            ++cnt
        }
        else
            tmp += u

    return cnt
};