/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class Solution {
    head: ListNode;
    size: number;
    constructor(head: ListNode | null) {
        this.head = head
        this.size = (() => {
            let len = 0
            let ch = head
            while(ch != null){
                ++len
                ch = ch.next
            }
            return len
        })();    
    }

    getRandom(): number {
        const rand = ~~(Math.random() * this.size)
        let c = 0
        let ch = this.head
        while(c != rand){
            ++c
            ch = ch.next
        }
        return ch.val
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */