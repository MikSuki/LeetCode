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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(lists.length == 0) return null
    if(lists.length % 2 != 0) lists.push(null)

    let start = 0, end = lists.length - 1;
    while(end - start > 1){
        let c = 0
        for(let i = start; i < end; i += 2){
            lists[c] = (merge(lists[i], lists[i + 1]))
            ++c
        }
        end = ~~(end / 2)
        if(end % 2 == 0) {
            ++end
            lists[end] = null
        }
    }
    
    return merge(lists[start], lists[end])

    function merge(left: ListNode | null, right: ListNode | null): ListNode | null{
        if(left == null) return right
        if(right == null) return left

        let head: ListNode = null
        if(left.val < right.val){
            head = new ListNode(left.val, null)
            left = left.next
        }    
        else{
            head = new ListNode(right.val, null)
            right = right.next
        }
        let cur: ListNode = head
        
        while(left != null && right != null){
            if(left.val < right.val){
                cur.next = new ListNode(left.val, null)
                left = left.next
            }    
            else{
                cur.next = new ListNode(right.val, null)
                right = right.next
            }
            cur = cur.next
        }
        if(left != null) cur.next = left
        else cur.next = right
        return head
    }
};