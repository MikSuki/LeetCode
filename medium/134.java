/**
    # 134. Gas Station
 */
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        final int n = gas.length;
        int earn[] = new int[n];
        
        for(int i = 0; i < n; ++i)
            earn[i] = gas[i] - cost[i];

        int ls = 0; // local sum
        int ts = 0; // total sum
        int st = 0; // start

        for(int i = 0; i < n; ++i){
            ls += earn[i];
            if(ls < earn[i]) {
                ls = earn[i];
                st = i;
            }

            ts += earn[i];
        }

        return ts < 0 ? -1 : st;
    }
}
