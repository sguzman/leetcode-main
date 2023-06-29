/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>();
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < s.length) {
      if (!set.has(s[right])) {
        set.add(s[right]);
        right++;
        max = Math.max(max, set.size);
      } else {
        set.delete(s[left]);
        left++;
      }
    }
    return max;
  };
// @lc code=end

