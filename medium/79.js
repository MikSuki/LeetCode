/**
 * 給定字元表格board和字串word，檢查是否能拚出此word
 * 用一個 m*n的 array記錄走過的格子
 * 然後用 DFS 找即可
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const z = word.length;
    const find = new Array(m).fill(null).map(()=> new Array(n).fill(null).map(() => 0));
    const dir = [-1, 0, 1, 0, 0, -1, 0, 1];

    for(let i = 0; i < m; ++i)
        for(let j = 0; j < n; ++j)
            if(DFS(i, j, 0)) return true;                
    return false;

    function DFS(i, j, word_index){
        if(word_index === z) return true;
        if(i < 0 || i >= m || j < 0 || j >= n || find[i][j]) return false;
        // match case 
        if(board[i][j] === word[word_index]){
            find[i][j] = 1;
            for(let k = 0; k < 8; k += 2)
                if(DFS(i + dir[k], j + dir[k+1], word_index + 1)) return true;
            find[i][j] = 0;
        }
        else return false;
    }
};