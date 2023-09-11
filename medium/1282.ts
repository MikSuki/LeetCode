/**
    1282. Group the People Given the Group Size They Belong To
 */
function groupThePeople(groupSizes: number[]): number[][] {
    const res: number[][] = []
    const map: Map<number, number[]> = new Map()
    for (let i = 0; i < groupSizes.length; ++i) {
        const size = groupSizes[i]
        let arr: number[] = map.get(size)
        if (arr == undefined) {
            arr = []
            map.set(size, arr)
        }
        arr.push(i)
        if (arr.length == size) {
            res.push(arr)
            map.delete(size)
        }
    }
    return res
};