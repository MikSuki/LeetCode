/**
    # 11. Container With Most Water
*/
class Solution {
public:
    int maxArea(vector<int>& height) {
        int l = 0, r = height.size() - 1;
        int res = getArea(height, l, r);

        while(l < r){
            if(height[l] < height[r])
                ++l;
            else
                --r;
            res = max(res, getArea(height, l, r));    
        }

        return res;
    }

    int getArea(vector<int>& height, int l, int r){
        return (r - l) * min(height[l], height[r]);
    }
};
