class SnapshotArray {
    private id: number
    private a: number[][][]

    constructor(length: number) {
        this.id = 0
        this.a = new Array(length).fill(0).map(() => [[0, 0]])
    }

    set(index: number, val: number): void {
        const a = this.a[index]
        if (a[a.length - 1][1] == this.id)
            a[a.length - 1][0] = val
        else
            a.push([val, this.id])
    }

    snap(): number {
        return this.id++
    }

    get(index: number, snap_id: number): number {
        const a = this.a[index]
        if(a[a.length - 1][1] == snap_id)
            return a[a.length - 1][0]
        // binary search
        let l = 0, r = a.length - 1
        while (l < r) {
            const m = (l + r) >> 1
            if(a[m][1] == snap_id)
                return a[m][0]
            if(a[m][1] > snap_id)
                r = m - 1
            else l = m + 1
        }
        return a[l][1] <= snap_id ? a[l][0] : a[l-1][0]
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */