/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
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
    const add = (n1: ListNode | null, n2: ListNode | null, carry: number): ListNode | null => {
      if (!n1 && !n2 && carry === 0) {
        return null;
      }
      const sum = (n1?.val ?? 0) + (n2?.val ?? 0) + carry;
      const node = new ListNode(sum % 10);
      node.next = add(n1?.next ?? null, n2?.next ?? null, Math.floor(sum / 10));
      return node;
    };
    return add(l1, l2, 0);
  };
// @lc code=end

