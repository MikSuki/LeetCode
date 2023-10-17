/**
    # 1361. Validate Binary Tree Nodes
*/
class Solution {
public:
    bool validateBinaryTreeNodes(int n, vector<int>& leftChild, vector<int>& rightChild) {
        vector<int> indegree(n, 0);

        for(int i = 0; i < n; ++i){
            if(leftChild[i] != -1)
                indegree[leftChild[i]]++;
            if(rightChild[i] != -1)
                indegree[rightChild[i]]++;
        }

        // check is binary & only one root
        int cnt = 0;
        for(int i = 0; i < n; ++i){
            if(indegree[i] > 1 || indegree[i] == 0 && ++cnt > 1)
                return false;
        }

        // check has cycle 
        queue<int> q;
        vector<int> visited(n, 0);

        for(int i = 0; i < n; ++i)
            if(indegree[i] == 0)
                q.push(i);
            
        while(q.size()){
            int node = q.front();
            q.pop();
            if(visited[node]) return false;
            visited[node] = 1;
            if(leftChild[node] != -1)
                q.push(leftChild[node]);
            if(rightChild[node] != -1)
                q.push(rightChild[node]);
        }

        // can reach all nodes 
        cnt = 0;
        for(int i = 0; i < n; ++i)
            if(visited[i]) ++cnt;

        return cnt == n;
    }
};
