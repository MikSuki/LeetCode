/**
    # 815. Bus Routes
 */
class MyQueue<T> {

    public constructor(
        private elements: Record<number, T> = {},
        private head: number = 0,
        private tail: number = 0
    ) { }

    public enqueue(element: T): void {
        this.elements[this.tail] = element;
        this.tail++;
    }

    public dequeue(): T {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;

        return item;
    }

    public top(): T {
        return this.elements[this.head];
    }

    public get size(): number {
        return this.tail - this.head;
    }
}

function numBusesToDestination(routes: number[][], source: number, target: number): number {
    if(source == target) return 0;
    const map: Map<number, number[]> = new Map();

    for (let i = 0; i < routes.length; ++i) {
        const tos: number[] = [];
        routes[i].forEach(x => {
            if (!map.has(x)) map.set(x, []);
            map.get(x).push(i);
        })
    }

    const q: MyQueue<number> = new MyQueue();
    const visited: number[] = [];
    let t: number = 1;
    const buses: number[] = map.get(source);
    if(buses!= undefined)
        buses.forEach(bus => {
            q.enqueue(bus);
            visited[bus] = 1;
        })
    while (q.size) {
        let len: number = q.size;
        while (--len >= 0) {
            const bus: number = q.dequeue();
            const nexts: number[] = routes[bus];
            if (nexts.includes(target)) return t;
            nexts.forEach(next => {
                const buses: number[] = map.get(next);
                if(buses == undefined) return;
                buses.forEach(bus => {
                    if(visited[bus]) return;
                    visited[bus] = 1;
                    q.enqueue(bus);
                })
            })
        }
        ++t;
    }

    return -1;
};
