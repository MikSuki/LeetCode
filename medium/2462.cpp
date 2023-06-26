/**
    問題: 
        雇用員工，且花費最少
        每次只能找前candidate個and後candidate個
        找完不能重複找
    
    方法:
        兩個heap記前半和後半
    
    時間:
        O(klogn)
*/

class Solution {
public:
    long long totalCost(vector<int>& costs, int k, int candidates) {
        priority_queue<int, vector<int>, greater<int>> pq1, pq2;
        int lo = 0, hi = costs.size() - 1;
        int n = costs.size();
        long long res = 0;

        while(lo < candidates)
            pq1.push(costs[lo++]);
        while(hi > n - candidates - 1 && hi >= lo){
            pq2.push(costs[hi--]);
        }

        while(--k >= 0) {
            int c1 = pq1.empty() ? 100001 : pq1.top();
            int c2 = pq2.empty() ? 100001 : pq2.top();
            
            if(c1 <= c2){
                res += c1;
                pq1.pop();
                if(lo <= hi) pq1.push(costs[lo++]);
            }
            else{
                res += c2;
                pq2.pop();
                if(hi >= lo) pq2.push(costs[hi--]);
            }
        }

        return res;
    }
};

// n = 4
// can = 3
// lo < 3 => 0, 1, 2
// hi > n-can-1 = 0 => 3, 2, 1