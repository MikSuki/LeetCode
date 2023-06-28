/**
    問題: 
        給一張圖，邊的權重為機率
        找start到end最高機率的路徑
    
    方法:
        Dijkstra變形
        1. 
            建 adj矩陣
        2.
            從start開始走，maxHeap存到每個點的機率
            每經過一個點，把visited設為1
            不斷拜訪直到end
    
    時間:
        O(|E| + |E|log|E|) = O(|E|log|E|)
*/

using P = pair<double, int>;

class Solution {
public:
    double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start, int end) {
        priority_queue<P> pq;
        vector<int> visited(n, 0);
        vector<vector<P>> adj(n);
        // create adjacency matrix
        for(int i = 0; i < edges.size(); ++i){
            int x = edges[i][0], y = edges[i][1];
            double prob = succProb[i];
            adj[x].push_back({prob, y});
            adj[y].push_back({prob, x});
        }
      
        pq.push({1, start});

        while(!pq.empty()){
            auto [prob, x] = pq.top();
            pq.pop();

            if(visited[x]) continue;
            visited[x] = 1;

            if(x == end) 
                return prob;

            for(auto [p, y]: adj[x])
                pq.push({prob * p, y});
        }

        return 0;       
    }
};