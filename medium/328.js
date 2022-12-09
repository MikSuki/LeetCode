/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 把 linkedlist index 為偶數的 nodes 搬到後面
 * O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) return head
    let last = head,
        cur = head.next
    let even = even_cur = cur
    let f = 1
    while (true) {
        if (!f) {
            even_cur.next = cur
            even_cur = even_cur.next
        }
        f = 0;
        last.next = cur.next
        if (!cur.next || !cur.next.next) {
            if (cur.next) last = cur.next
            break;
        }
        last = cur.next
        cur = last.next
    }
    even_cur.next = null
    last.next = even
    return head
};