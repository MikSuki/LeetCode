/**
    # 380. Insert Delete GetRandom O(1)

    # 要求:
        建一個可以取得亂數位置的 random set
        共三種operations: insert / remove / get，都要是O(1)
    
    # 方法
        1. data struture
            一個hashmap<value, position in array>: random set的元素和在array中的位置 
            一個array: random set的元素
        
        2. insert(val) / remove(val)
            因為已經記著所有元素的位置，要新增或刪除前，如果已經存在，就先把它移到array的尾巴，再做處理
            ->
            先看 hashmap 有沒有該元素
                有-> 把array尾巴的元素放到原本val的位置，在做insert/remove
                沒有-> val 插入array / -
            再來記得修改hashmap val的值
        
        3. getRandom()
            return array[random() * array.size]

    # tag: DataStrucure
 */
class RandomizedSet {
    HashMap<Integer, Integer> map;
    ArrayList<Integer> arr;

    public RandomizedSet() {
        map = new HashMap();       
        arr = new ArrayList();
    }
    
    public boolean insert(int val) {
        boolean f = map.containsKey(val);
        if(f){
            int pos = map.get(val);
            arr.set(pos, arr.get(arr.size() - 1));
            arr.set(arr.size() - 1, val);
            map.put(arr.get(pos), pos);
        }
        else
            arr.add(val);
            
        map.put(val, arr.size() - 1);
        return !f;
    }
    
    public boolean remove(int val) {
        boolean f = map.containsKey(val);
        if(f){
            int pos = map.get(val);
            arr.set(pos, arr.get(arr.size() - 1));
            map.put(arr.get(pos), pos);
            map.remove(val);
            arr.remove(arr.size() - 1);
        }
        
        return f;
    }
    
    public int getRandom() {
        int pos = (int) (Math.random() * arr.size());
        return arr.get(pos);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
