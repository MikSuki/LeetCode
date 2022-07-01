/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return addList(l1, l2);
};

function getVal(node) {
    return node == null ? 0 : node.val;
}

function addVal(l1, l2, carry) {
    const sum = getVal(l1) + getVal(l2) + carry;
    return {
        val: sum % 10,
        carry: ~~(sum / 10),
    };
}

function toNext(node) {
    return node == null ? null : node.next;
}

function addList(l1, l2) {
    let add_res = addVal(l1, l2, 0);
    const head_node = new ListNode(add_res.val, null);
    let last_node = head_node;
    l1 = toNext(l1);
    l2 = toNext(l2);

    while (l1 != null || l2 != null) {
        add_res = addVal(l1, l2, add_res.carry);
        const node = new ListNode(add_res.val, null);
        last_node.next = node;
        last_node = node;
        l1 = toNext(l1);
        l2 = toNext(l2);
    }
    if (add_res.carry == 1)
        last_node.next = new ListNode(1, null)
    return head_node;
}



// ---------------------------
//   for test
// ---------------------------
const arr1 = [9, 9, 9, 9, 9, 9, 9];
const arr2 = [9, 9, 9, 9];

function init(arr) {
    const head_node = new ListNode(arr[0], null);
    let last_node = head_node;
    for (let i = 1; i < arr.length; ++i) {
        const node = new ListNode(arr[i], null);
        last_node.next = node;
        last_node = node;
    }
    return head_node;
}

function show(node) {
    while (node != null) {
        console.log(node.val + ', ');
        node = node.next;
    }
}

const l1 = init(arr1);
const l2 = init(arr2);
show(addTwoNumbers(l1, l2));