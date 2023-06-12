function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const m: number = image.length
    const n: number = image[0].length
    const vis: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const dir: number[] = [-1, 0, 0, -1, 1, 0, 0, 1]
    const picked: number = image[sr][sc]
    dfs(sr, sc)
    return image

    function dfs(x: number, y: number){
        if(x < 0 || y < 0 || x >= m || y >= n || vis[x][y])
            return 
        vis[x][y] = 1
        if(image[x][y] == picked){
            image[x][y] = color
            for(let i = 0; i < 8; i += 2)
                dfs(x + dir[i], y + dir[i + 1])
        }
    }
};