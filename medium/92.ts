/**
    92. Reverse Linked List II
 */

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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let cnt: number = 1
    let cur: ListNode = head, last: ListNode = head
    let t1: ListNode, t2: ListNode, t3: ListNode, t4: ListNode
    while (cur != null && cnt <= right) {
        if (cnt == left) {
            t1 = last
            t2 = cur
        }
        const next = cur.next
        if (cnt >= left)
            cur.next = last
        last = cur
        cur = next
        ++cnt
    }
    t3 = last
    t4 = cur
    t1.next = t3
    t2.next = t4

    return left == 1 ? t3 : head
};