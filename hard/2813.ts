/**
    2813. Maximum Elegance of a K-Length Subsequence
 */

function findMaximumElegance(items: number[][], k: number): number {
    items.sort((a, b) => b[0] - a[0])

    let sum: number = 0
    let res: number = 0
    const map: Map<number, number> = new Map()
    const heap = new MinPriorityQueue({ priority: a => a[0] })

    for (let i = 0; i < k; ++i) {
        sum += items[i][0]
        if (map.has(items[i][1]))
            map.set(items[i][1], map.get(items[i][1]) + 1)
        else
            map.set(items[i][1], 1)
        heap.enqueue(items[i])
    }

    res = Math.max(res, sum + map.size ** 2)

    for (let i = k; i < items.length; ++i) {
        if (map.has(items[i][1]))
            continue
        while (heap.size()) {
            const [p, c] = heap.dequeue().element
            if (map.get(c) > 1) {
                map.set(c, map.get(c) - 1)
                sum -= p
                map.set(items[i][1], 1)
                sum += items[i][0]
                res = Math.max(res, sum + map.size ** 2)
                break
            }
        }
    }


    return res
};