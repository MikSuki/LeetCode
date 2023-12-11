// # 1287. Element Appearing More Than 25% In Sorted Array
class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int quarter = arr.size() / 4;
        for(int i = 0; i < arr.size(); ++i)
            if(arr[i] == arr[i + quarter])
                return arr[i];
        return -1;
    }
};
