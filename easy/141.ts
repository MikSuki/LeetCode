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

function hasCycle(head: ListNode | null): boolean {
    let fast: ListNode | null = head,
        slow: ListNode | null = head
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast == slow)
            return true
    }
    return false
};