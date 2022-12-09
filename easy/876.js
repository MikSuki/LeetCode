/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 找 linklist中間的 node
 * 龜兔賽跑方法
 * 用兩個指標, 烏龜每次 + 1, 兔子每次 + 2
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let tortoise = head,
        hare = head;
    while (hare && hare.next !== null) {
        tortoise = tortoise.next
        hare = hare.next.next
    }
    return tortoise
};