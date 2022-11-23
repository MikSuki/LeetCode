/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const w = grid[0].length,
        h = grid.length,
        output = [];
    for (let i = 0; i < w; ++i) {
        let x = i,
            y = 0;
        let flag = true;
        while (flag) {
            if (grid[y][x] === grid[y][x + grid[y][x]]) {
                x += grid[y][x];
                if (x < 0 || x >= w || ++y === h) flag = false;
            } else
                flag = false;
        }
        if (y === h) output.push(x);
        else output.push(-1);
    }
    return output;
};