function topKFrequent(nums: number[], k: number): number[] {
    interface element{
        v: number,
        c: number
    }
    const map: Map<number, number> = new Map()
    nums.forEach(e => {
        const v = map.get(e)
        !v ? map.set(e, 1) : map.set(e, v + 1)
    })
    const arr: element[] = []
    const res: number[] = []
    map.forEach((v, key) => {arr.push({v: key, c: v})})
    arr.sort((a: element, b: element) => b.c - a.c)
    for(let i = 0; i < k; ++i)
        res.push(arr[i].v)
    return res
};