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

function pairSum(head: ListNode | null): number {
  const arr: number[] = []
  let cur = head
  while(cur != null){
    arr.push(cur.val)
    cur = cur.next
  }
  let max = 0
  let i = 0, j = arr.length - 1
  while(i < j){
    max = Math.max(max, arr[i] + arr[j])
    ++i
    --j
  }

  return max
};