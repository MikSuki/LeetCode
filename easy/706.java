class MyHashMap {
    final int SIZE = 1000;
    ArrayList<int[]>[] buckets;


    public MyHashMap() {
        buckets = new ArrayList[SIZE];
        for(int i = 0; i < SIZE; ++i)
            buckets[i] = new ArrayList<int[]>();
    }
    
    public void put(int key, int value) {
        ArrayList<int[]> bucket = buckets[key % SIZE];

        for(int[] p: bucket)
            if(p[0] == key){
                p[1] = value;
                return;
            }

       bucket.add(new int[]{key, value});
    }
    
    public int get(int key) {
        ArrayList<int[]> bucket = buckets[key % SIZE];
        for(int[] p: bucket)
            if(p[0] == key)
                return p[1];
        return -1;
    }
    
    public void remove(int key) {
        ArrayList<int[]> bucket = buckets[key % SIZE];
        for(int i = 0; i < bucket.size(); ++i)
            if(bucket.get(i)[0] == key){
                bucket.remove(i);
                return;
            }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */
