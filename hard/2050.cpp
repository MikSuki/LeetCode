/**
    # 2050. Parallel Courses III
*/
class Solution {
public:
    int minimumTime(int n, vector<vector<int>>& relations, vector<int>& time) {
        vector<int> indegree(n + 1, 0);
        vector<int> pretime(n + 1, 0);
        vector<vector<int>> edges(n + 1);
        queue<int> q;
        int res = 0;

        time.insert(time.begin(), 0);
        
        for(int i = 0; i < relations.size(); ++i){
            ++indegree[relations[i][1]];
            edges[relations[i][0]].push_back(relations[i][1]);
        }

        for(int i = 1; i <= n; ++i)
            if(indegree[i] == 0)
                q.push(i);

        while(q.size()){
            int len = q.size();
            for(int i = 0; i < len; ++i){
                int cur = q.front();
                int t = pretime[cur] + time[cur];
                q.pop();
                vector<int> to = edges[cur];
                for(int next : to){
                    -- indegree[next];
                    if(indegree[next] == 0)
                        q.push(next);
                    pretime[next] = max(pretime[next], t);
                }
            }
        }

        for(int i = 1; i <= n; ++i)
            res = max(res, pretime[i] + time[i]);
        
        return res;
    }
};
