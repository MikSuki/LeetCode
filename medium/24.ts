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

function swapPairs(head: ListNode | null): ListNode | null {
    let cur = head
    while(cur != null){
        if(cur.next){
            let tmp = cur.val
            cur.val = cur.next.val
            cur.next.val = tmp
        }
        cur = cur.next?.next
    }
    return head
};