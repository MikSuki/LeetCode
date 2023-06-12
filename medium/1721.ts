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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    const arr: ListNode[] = []
    let cur = head
    while(cur != null){
        arr.push(cur)
        cur = cur.next
    }

    const p1 = k - 1
    const p2 = arr.length - k
    const tmp = arr[p1].val
    arr[p1].val = arr[p2].val
    arr[p2].val = tmp

    return head
};