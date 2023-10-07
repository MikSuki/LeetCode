class TimeLimitedCache {
    map: Map<number, number[]>; // map<key, [endTime, value]>
    timestamp: typeof MinPriorityQueue; // minHeap<[endTime, key]>

    constructor() {
        this.map = new Map();
        this.timestamp = new MinPriorityQueue({ priority: (e: number[]) => e[0] });
    }

    set(key: number, value: number, duration: number): boolean {
        const curT: number = Date.now()
        const endT: number = curT + duration
        const res: number[] = this.map.get(key)
        let exist: boolean = false

        if (res != undefined && res[0] > curT)
            exist = true

        this.map.set(key, [endT, value])
        this.timestamp.enqueue([endT, key])

        return exist
    }

    get(key: number): number {
        const res: number[] = this.map.get(key)
        if (res == undefined || Date.now() > res[0]) return -1
        return res[1]
    }

    count(): number {
        const curT: number = Date.now()

        while (this.timestamp.size()) {
            const top: number[] = this.timestamp.front().element
            // an element expired
            if (curT > top[0]) {
                const res = this.map.get(top[1])
                // if top is not be overwritten, delete it
                if (res != undefined && res[0] == top[0])
                    this.map.delete(top[1])
                this.timestamp.dequeue()
            }
            else
                break
        }
        return this.map.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
