/**
    題目: 
        435. Non-overlapping Intervals

    問題:
        給一堆區間，刪除最少的區間，使之不重疊

    方法:       
        greedy==

        1. 根據ending排序
        2. 記著當前ending(起始為最小值)
           start比當前ending
            小: 可以更新ending(因排序過，後面一部分的ending都一樣，拿裡面的答案也不會比較好)
            否則: 刪除 (會導致重疊)
        
    時間:
        O(n)

 */

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1])

    let ending: number = -50001
    let res: number = 0

    for (const i of intervals)
        if (i[0] >= ending)
            ending = i[1]
        else
            ++res

    return res
};