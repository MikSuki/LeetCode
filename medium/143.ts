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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    const tmp: ListNode[] = [];
    let cur: ListNode = head;
    while(cur != null){
        tmp.push(cur);
        cur = cur.next;
    }
    let l = 0;
    let r = tmp.length - 1;
    while(l < r){
        tmp[r].next = tmp[l].next;
        tmp[l].next = tmp[r];
        l++;
        --r;
    }
    tmp[l].next = null;
};
