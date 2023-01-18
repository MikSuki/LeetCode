/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length === 1) return 1
    const len = points.length
    let cnt = 0
    for (let i = 0; i < len; ++i) {
        const map = new Map()
        for (let j = 0; j < len; ++j) {
            if (i !== j) {
                const atan2 = Math.atan2(points[i][1] - points[j][1], points[i][0] - points[j][0])
                const v = map.get(atan2)
                if (!v) map.set(atan2, 1)
                else map.set(atan2, v + 1)
            }
        }
        map.forEach(v => cnt = Math.max(cnt, v + 1))
    }
    return cnt
};