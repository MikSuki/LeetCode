/**
 * 建立 insert, remove, random_get 都是 O(1) 的 set
 * 用一組 array 記 value
 * 和一組 map 記 value: pos in array
 * 
 * insertm random_get 都是 O(1)  沒問題
 * 而 remove 則是把要刪的 value 丟到最後面，再 pop array 即可 O(1)
 */

var RandomizedSet = function() {
    this.indices = new Map(); // val: pos in array
    this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.indices.has(val)) return false;
    this.array.push(val);
    this.indices.set(val, this.array.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const idx = this.indices.get(val);
    if(idx === undefined) return false;
    let v_end = this.array[this.array.length - 1];
    this.indices.set(v_end, idx);
    this.indices.delete(val);
    this.array[idx] = v_end;
    this.array.pop();
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
   const rand = ~~(Math.random() * this.array.length);
   return this.array[rand];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */