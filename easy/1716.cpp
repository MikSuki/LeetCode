/**
    # 1716. Calculate Money in Leetcode Bank
*/
class Solution {
public:
    int totalMoney(int n) {
        int base = 28;
        int res = 0;
        int week = n / 7;
        int day = n % 7;
        res += base * week + (7 * (week - 1) ) * week / 2;
        week += 1;
        res += (week + week + (day - 1)) * day / 2;

        return res;
    }
};
