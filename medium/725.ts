/**
    725. Split Linked List in Parts
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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    const arr: ListNode[] = []
    let cur: ListNode = head
    while (cur != null) {
        arr.push(cur)
        cur = cur.next
    }
    const n: number = arr.length
    if (n < k) {
        arr.forEach(node => node.next = null)
        for (let i = n; i < k; ++i)
            arr.push(null)
        return arr
    }

    const res: ListNode[] = []
    let i: number = 0
    let j: number = n % k
    const m: number = Math.floor(n / k)
    while (i < n) {
        res.push(arr[i])
        if (j > 0) {
            arr[i + m].next = null
            i += m + 1
        }
        else {
            arr[i + m - 1].next = null
            i += m
        }
        --j
    }

    return res
};