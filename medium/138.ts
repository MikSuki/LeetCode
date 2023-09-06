/**
    138. Copy List with Random Pointer
 */

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    const map: Map<Node, Node> = new Map()
    let cur: Node = head
    while (cur != null) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }

    cur = head
    while (cur != null) {
        const curr = map.get(cur)
        curr.next = cur.next == null ? null : map.get(cur.next)
        curr.random = cur.random == null ? null : map.get(cur.random)
        cur = cur.next
    }

    return map.get(head)
};