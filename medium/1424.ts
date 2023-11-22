/**
    1424. Diagonal Traverse II
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

function findDiagonalOrder(nums: number[][]): number[] {
    const q: MyQueue<number[]> = new MyQueue();
    const res: number[] = [];

    q.enqueue([0, 0]);

    while (q.size) {
        const [x, y] = q.dequeue();
        res.push(nums[x][y]);
        if (y == 0 && x + 1 < nums.length) q.enqueue([x + 1, y]);
        if (y + 1 < nums[x].length) q.enqueue([x, y + 1]);
    }


    return res;
};
