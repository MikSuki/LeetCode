/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const map = new Map()
    tasks.forEach(e => {
        const v = map.get(e)
        if (!v) map.set(e, 1)
        else map.set(e, v + 1)
    })
    let cnt = 0
    for ([k, v] of map)
        if (v === 1) {
            cnt = -1
            break
        } else cnt += Math.ceil(v / 3)

    return cnt
};