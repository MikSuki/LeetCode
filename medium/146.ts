/**
    題目: 
        146. LRU Cache
    
    問題:   
        實作一個LRU cache，
            get(key)
            put(key, value) -> 放入新值，如果超過容量，刪除最久以前沒用過的資料
        且要求O(1)

    方法:   
        用 js 原生的 map 即可
        set/delete都是 O(1)
        且保有 insertion order，所以刪掉過期的資料也只需O(1)

 */

class LRUCache {
    map: Map<number, number>
    capacity: number

    constructor(capacity: number) {
        this.map = new Map()
        this.capacity = capacity
    }

    get(key: number): number {
        const v: number = this.map.get(key)
        if (v == undefined) return -1
        this.map.delete(key)
        this.map.set(key, v)
        return v
    }

    put(key: number, value: number): void {
        this.map.delete(key)
        this.map.set(key, value)

        if (this.map.size > this.capacity)
            this.map.delete(this.map.keys().next().value)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */