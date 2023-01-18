/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length < 1) return [newInterval]

    const overlap = i => i[1] - newInterval[0] >= 0 && newInterval[1] - i[0] >= 0
    const left = i => i[0] > newInterval[0] && i[1] > newInterval[1]
    const merge = idx => {
        newInterval[0] = Math.min(intervals[idx][0], newInterval[0])
        newInterval[1] = Math.max(intervals[idx][1], newInterval[1])
    }
    const output = []
    let i = 0;

    while (i < intervals.length) {
        if (overlap(intervals[i]))
            merge(i)
        else if (left(intervals[i]))
            break
        else
            output.push(intervals[i])
            ++i
    }
    output.push(newInterval)
    while (i < intervals.length)
        output.push(intervals[i++])

    return output
};