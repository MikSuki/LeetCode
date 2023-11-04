/**
    # 1503. Last Moment Before All Ants Fall Out of a Plank

    完全彈性碰撞，碰到後方向對調且速度不變，
    所以只是換了螞蟻，但還是同樣的往外移動
*/
class Solution {
public:
    int getLastMoment(int n, vector<int>& left, vector<int>& right) {
        int res = 0;

        for(int i = 0; i < left.size(); ++i)
            res = max(res, left[i]);
        for(int i = 0; i < right.size(); ++i)
            res = max(res, n - right[i]);

        return res;
    }
};
