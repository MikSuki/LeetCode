/**
    # 274. H-Index
 */
class Solution {
    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        int k = citations.length;
        for(int i: citations){
            if(i >= k)
                return k;
            --k;
        }

        return k;
    }
}
