/**
    155. Min Stack
 */
const last = (arr: number[]) => arr[arr.length - 1]

class MinStack {
    stack: number[];
    mins: number[];

    constructor() {
        this.stack = []
        this.mins = []
    }

    push(val: number): void {
        this.stack.push(val)
        if (this.mins.length == 0 || last(this.mins) >= val)
            this.mins.push(val)
    }

    pop(): void {
        if (last(this.mins) == last(this.stack))
            this.mins.pop()
        this.stack.pop()
    }

    top(): number {
        return last(this.stack)
    }

    getMin(): number {
        return last(this.mins)
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */