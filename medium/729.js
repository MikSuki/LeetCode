
var BST = function () {
    this.arr = [];
}

BST.prototype.insert = function (v, pos) {
    this.arr.splice(pos, 0, v);
}

BST.prototype.search = function (v) {
    let l = 0, r = this.arr.length - 1;
    while(l < r){
        let m = ~~((l + r)  / 2);
        if(v < this.arr[m]) r = m - 1;
        else if (v > this.arr[m]) l = m + 1;
        else return m; 
    }
    return this.arr[l] === v ? l : -1;
}



var MyCalendar = function () {
    this.bst = new BST();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    const l = this.bst.search(start),
        r = this.bst.search(end);
    // if intersection?
    if(l === -1 && r === -1 || r - l)
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */


// let bst = new BST();
// bst.arr = [2, 3, 5, 6, 8, 9, 11];
// console.log(bst.arr)
// for(let i = 0; i < 14; ++i)
//     console.log(i, ': ', bst.search(i))

