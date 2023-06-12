import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public int numOfMinutes(int n, int headID, int[] manager, int[] informTime) {
      HashMap<Integer, ArrayList<Integer>> G = new HashMap<>();
      for(int i = 0; i < manager.length; ++i)
        G.computeIfAbsent(manager[i], k -> new ArrayList<Integer>()).add(i);

      // BFS
      int res = 0;
      Queue<int[]> q = new LinkedList<>();
      q.add(new int[]{headID, informTime[headID]});
      while(!q.isEmpty()){
        int[] f = q.poll();
        int s = f[0], t = f[1];
        ArrayList<Integer> al = G.get(s);
        if(al != null){
          res = Math.max(res, t);
          for(int i: al) {
            q.add(new int[]{i, t + informTime[i]});
          }
        }
      }

      return res;
    }
}