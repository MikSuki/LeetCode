/**
    問題: 
        給兩個排序好的array和一個k，求前k個總和最小的pairs(pair來自兩array各一個元素)

    方法:
        用heap紀錄<sum(nums1[i], nums[j]), <i, j>>
        然後一個set記錄已拜訪的<i, j>即可
    
    時間:
        O(k*log(m+n))
*/

class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        int m = nums1.size(), n = nums2.size();
        vector<vector<int>> res;
        set<string> visited;
        priority_queue<pair<int, pair<int, int>>, vector<pair<int, pair<int, int>>>, greater<pair<int, pair<int, int>>>> mh;

        mh.push({nums1[0] + nums2[0], {0, 0}});

        while(--k >= 0 && !mh.empty()){
            auto top = mh.top();
            int i = top.second.first;
            int j = top.second.second;
            
            mh.pop();
            res.push_back({nums1[i], nums2[j]});

            if(i + 1 < m && visited.find(to_string(i + 1) + "_" + to_string(j)) == visited.end()){
                mh.push({nums1[i + 1] + nums2[j], {i + 1, j}});
                visited.insert(to_string(i + 1) + "_" + to_string(j));
            }
            if(j + 1 < n && visited.find(to_string(i) + "_" + to_string(j + 1)) == visited.end()){
                mh.push({nums1[i] + nums2[j + 1], {i, j + 1}});
                visited.insert(to_string(i) + "_" + to_string(j + 1));
            }
        }

        return res;
    }
};