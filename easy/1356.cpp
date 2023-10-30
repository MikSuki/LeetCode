class Solution {
private:
    static bool cmp(int a, int b){
        int ba = __builtin_popcount(a);
        int bb = __builtin_popcount(b);

        if(ba == bb) return a < b;
        return ba < bb;
    }

public:
    vector<int> sortByBits(vector<int>& arr) {
        sort(arr.begin(), arr.end(), cmp);
        return arr;
    }
};
