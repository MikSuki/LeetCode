/**
    981. Time Based Key-Value Store
 */

interface e {
    ts: number;
    val: string
}

class TimeMap {
    map: Map<string, e[]>;

    constructor() {
        this.map = new Map()
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key))
            this.map.set(key, [])
        this.map.get(key).push({ ts: timestamp, val: value })
    }

    get(key: string, timestamp: number): string {
        const arr = this.map.get(key)
        if (arr == undefined || timestamp < arr[0].ts) return ""
        // lower bound
        let l: number = 0, r: number = arr.length - 1
        while (l < r) {
            const m = r - Math.floor((r - l) / 2)
            if (arr[m].ts == timestamp)
                return arr[m].val
            if (arr[m].ts > timestamp)
                r = m - 1
            else
                l = m
        }

        return arr[l].val
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */