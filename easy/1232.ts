function checkStraightLine(coordinates: number[][]): boolean {
    const [x0, y0] = coordinates[0]
    const [x1, y1] = coordinates[1]
    const xx = x1 - x0
    const yy = y1 - y0

    for(let i = 2; i < coordinates.length; ++i)
        if(xx * (coordinates[i][1] - y0) != (coordinates[i][0] - x0) * yy)    
            return false 
    return true
};

// slope1 = (x1 - x0) / (y1 - y0)
// slope2 = (x2 - x0) / (y2 - y0)

// slope1 = slope2 
// =>
//     (x1 - x0) * (y2 - y0) = (x2 - x0) * (y1 - y0)

