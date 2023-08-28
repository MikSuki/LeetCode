/**
    973. K Closest Points to Origin
 */
function kClosest(points: number[][], k: number): number[][] {
    const pq = new MinPriorityQueue({ priority: e => e.dist })
    const res: number[][] = []

    points.forEach(point => pq.enqueue({ cord: point, dist: point[0] ** 2 + point[1] ** 2 }))
    while (--k >= 0)
        res.push(pq.dequeue().element.cord)

    return res
};