/**
    646. Maximum Length of Pair Chain

    方法:
        LIS變形
        
        1. 用尾巴排序成由小到大
        2. greedy的看能不能插入剛剛找到的答案中

        * 和LIS差異在: 資料不用按照順序
 */

function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[1] - b[1])
    let len: number = 1
    /** last tail */
    let lt: number = pairs[0][1]
    let i = 1

    while (i < pairs.length) {
        if (lt < pairs[i][0]) {
            lt = pairs[i][1]
            ++len
        }
        ++i
    }

    return len
};