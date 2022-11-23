/**
 * 確認輸入是否為正確的數獨題目
 * 直的、橫的、九宮格裡都有1~9
 * 用9+9+9個sets記錄即可
 * Time: O(mn)
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    const rows = new Array(9).fill(null).map(() => new Set());  
    const cols = new Array(9).fill(null).map(() => new Set());  
    const grids = new Array(3).fill(null).map(() => new Array(3).fill(null).map(()=>new Set()));  
    for(let i = 0; i < 9; ++i){
        for(let j = 0; j < 9; ++j){
            const e = board[i][j];
            if(e === '.') continue;
            if(!addToSet(rows[i], e)) return false;
            if(!addToSet(cols[j], e)) return false;
            if(!addToSet(grids[~~(i/3)][~~(j/3)], e)) return false;
        }
    }
    return true;

    function addToSet(set, v){
        if(set.has(v)) return false;
        set.add(v);
        return true;
    }
};