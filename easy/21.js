/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) {
        if (list2 === null)
            return null;
        else
            return list2;
    } else if (list2 === null)
        return list1;

    let head = null,
        last = head;

    while (list1 !== null && list2 !== null) {
        let v = 0;

        if (list1.val < list2.val) {
            v = list1.val;
            list1 = list1.next;
        } else {
            v = list2.val;
            list2 = list2.next;
        }

        const cur = new ListNode(v, null);
        if (head === null) {
            head = cur;
            last = head;
        } else {
            last.next = cur;
            last = cur;
        }
    }

    if (list1 === null)
        last.next = list2;
    else if (list2 === null)
        last.next = list1;

    return head;
};