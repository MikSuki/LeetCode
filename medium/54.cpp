/**
    # 54. Spiral Matrix
*/
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int t = 0, b = matrix.size() - 1, l = 0, r = matrix[0].size() - 1;
        int dir[8] = {0, 1, 1, 0, 0, -1, -1, 0};
        int k = 0;
        int x = 0, y = 0;
        vector<int> res;
        
        while(l <= r && t <= b){
            res.push_back(matrix[x][y]);
            
            switch(k){
                case 0: 
                    if(y >= r) {
                        k = 1;
                        ++t;
                    }
                    break;
                case 1: 
                    if(x >= b){
                        k = 2;
                        --r;
                    }
                    break;
                case 2:
                    if(y <= l){
                        k = 3;
                        --b;
                    }
                    break;
                case 3:
                    if(x <= t){
                        k = 0;
                        ++l;
                    }
                    break;
            }
            x += dir[k * 2];
            y += dir[k * 2 + 1];
        }
        
        return res;
    }
};
