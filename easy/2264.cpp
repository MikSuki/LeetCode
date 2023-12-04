/**
    # 2264. Largest 3-Same-Digit Number in String
*/
class Solution {
public:
    string largestGoodInteger(string num) {
        int digit = -1;
        for(int i = 2; i < num.size(); ++i){
            if(num[i-2] == num[i-1] && num[i - 1] == num[i] && num[i] > '0' + digit)
                digit = num[i] - '0';
        }
        return digit == -1 ? "" : string(3, '0' + digit);
    }
};
