/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = '';
    while (head !== null) {
        str += head.val;
        head = head.next;
    }
    let flag = true;
    let i = 0,
        j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            flag = false;
            break;
        }
        ++i;
        --j;
    }
    return flag;
};