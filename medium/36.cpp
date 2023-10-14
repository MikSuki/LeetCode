/**
    # 36. Valid Sudoku
*/
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        // check row & column
        vector<vector<int>> rows(9, vector<int>(9, 0));
        vector<vector<int>> cols(9, vector<int>(9, 0));
        for(int i = 0; i < 9; ++i){
            for(int j = 0; j < 9; ++j){
                if(board[i][j] == '.') continue;
                int n = board[i][j] - '1';
                if(rows[i][n] || cols[j][n]) return false;
                rows[i][n] = 1;
                cols[j][n] = 1;
            }
        }

        // check block
        vector<vector<int>> blocks(9, vector<int>(9, 0));
        for(int i = 0; i < 9; ++i){
            for(int j = 0; j < 9; ++j){
                if(board[i][j] == '.') continue;
                int n = board[i][j] - '1';
                int k = i / 3 * 3 + j / 3;
                if(blocks[k][n]) return false;
                blocks[k][n] = 1;
            }
        }

        return true;
    }
};
