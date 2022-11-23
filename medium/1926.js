/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
 var nearestExit = function(maze, entrance) {
    const w = maze.length; // x. y軸相反
    const h = maze[0].length;
    const find = new Array(w).fill(null).map(() => new Array(h).fill(null).map(() => -1));
    const status = {
        wall: 0, empty: 1, exit: 2,
    };
    const dir = [-1, 0, 1, 0, 0, -1, 0, 1];
    let queue = [entrance[0], entrance[1]];
    let step = 1;
    find[queue[0]][queue[1]] = 0;
    while(queue.length){
        let n_queue = [];
        for(let i = 0; i < queue.length; i += 2){
            const [x, y] = [queue[i], queue[i+1]];
            for(let j = 0; j < 8; j += 2){
                const nx = x + dir[j], ny = y + dir[j + 1];
                switch(getStatus(nx, ny)){
                    case status.wall: break;
                    case status.exit: return step;
                    case status.empty:
                        n_queue.push(nx, ny);
                        find[nx][ny] = step;
                        break;
                }
            }
        }
        queue = n_queue;
        ++step;
    }

    return -1;

    function getStatus(x, y){
        if(x < 0 || y < 0 || x >= w || y >= h 
            || maze[x][y] === '+' || find[x][y] !== -1) return status.wall;
        // is border
        if(x === 0 || x === w-1 || y === 0 || y === h-1) return status.exit;
        return status.empty;
    }
};