/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0])
    let cnt = 1
    for (let i = 0; i < points.length - 1; ++i) {
        if (points[i][1] < points[i + 1][0])
            ++cnt
        else
            points[i + 1][1] = Math.min(points[i][1], points[i + 1][1])
    }
    return cnt
};