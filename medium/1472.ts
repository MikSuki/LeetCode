class BrowserHistory {
    stack: string[]
    cur: number
    size: number

    constructor(homepage: string) {
        this.stack = ['', homepage]
        this.cur = 1
        this.size = 1
    }

    visit(url: string): void {
        ++this.cur
        this.size = this.cur
        this.stack[this.cur] = url
    }

    back(steps: number): string {
        this.cur -= steps
        if(this.cur <= 0){
            this.cur = 1
        }
        return this.stack[this.cur]
    }

    forward(steps: number): string {
        this.cur += steps
        if(this.cur > this.size){
            this.cur = this.size
        }
        return this.stack[this.cur]
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */