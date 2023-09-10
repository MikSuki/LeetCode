/**
    146. LRU Cache
    用queue記錄曾用過的元素
    實際上用array模擬queue，q_cnt是避免用到Array.shift()畢竟js沒queue，且目前ts無Queue能用
 */
class LRUCache {
    map: Map<number, number>
    cnt: number[]
    q: number[]
    q_cnt: number
    cap: number

    constructor(capacity: number) {
        this.map = new Map()
        this.cnt = []
        this.q = []
        this.q_cnt = 0
        this.cap = capacity
    }

    get(key: number): number {
        if (this.map.has(key)) {
            this.q.push(key)
            ++this.cnt[key]
            return this.map.get(key)
        }
        return -1
    }

    put(key: number, value: number): void {
        // append cnt 
        for (let i = this.cnt.length; i <= key; ++i)
            this.cnt.push(0)

        if (this.map.size == this.cap && !this.map.has(key)) {
            while (this.map.size == this.cap) {
                const v: number = this.q[this.q_cnt++]
                if (--this.cnt[v] == 0)
                    this.map.delete(v)
            }
        }
        this.map.set(key, value)
        this.q.push(key)
        this.cnt[key]++
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */