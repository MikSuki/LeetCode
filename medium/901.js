function obj(v, l){
    this.v = v;
    this.l = l;
}

var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let len = 1;

    while(this.stack.length > 0 && price >= this.stack[this.stack.length - 1].v)
        len += this.stack.pop().l;

    this.stack.push(new obj(price, len));
    return len;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */