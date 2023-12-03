/**
    # 201. Bitwise AND of Numbers Range
*/
class Solution {
public:
    int rangeBitwiseAnd(int left, int right) {
        int b = 0;
        while(left != right){
            left = left >> 1;
            right = right >> 1;
            ++b;
        }
        return left << b;
    }
};
