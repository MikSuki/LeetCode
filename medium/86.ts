/**
    86. Partition List
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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (head == null) return head

    let small: ListNode = new ListNode()
    let large: ListNode = new ListNode()
    let cs: ListNode = small
    let cl: ListNode = large

    while (head != null) {
        if (head.val < x) {
            cs.next = head
            cs = cs.next
        }
        else {
            cl.next = head
            cl = cl.next
        }

        head = head.next
    }

    cs.next = large.next
    cl.next = null

    return small.next
};