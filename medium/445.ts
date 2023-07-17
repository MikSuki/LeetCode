/**
    題目:
        445. Add Two Numbers II

    問題:
        用兩個linked list表示兩數字，算出他們的總和

    方法:
        兩個stack記錄兩數，之後不斷pop算出總合
    
    時間:
        O(m + n)

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let a: number[] = []
    let b: number[] = []
    let cur: ListNode = l1
    while (cur != null) {
        a.push(cur.val)
        cur = cur.next
    }
    cur = l2
    while (cur != null) {
        b.push(cur.val)
        cur = cur.next
    }

    let head: ListNode = null
    let carry: number = 0
    while (a.length || b.length) {
        let sum: number = carry
        if (a.length) sum += a.pop()
        if (b.length) sum += b.pop()
        carry = 0
        let cur: ListNode
        if (sum > 9) {
            cur = new ListNode((sum) % 10)
            carry = 1
        }
        else
            cur = new ListNode(sum)
        cur.next = head
        head = cur
    }
    if (carry) {
        const cur = new ListNode(1)
        cur.next = head
        head = cur
    }

    return head
};