/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;
    while (left <= right) {
      const i = Math.floor((left + right) / 2);
      const j = Math.floor((m + n + 1) / 2) - i;
      const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
      const minRight1 = i === m ? Infinity : nums1[i];
      const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
      const minRight2 = j === n ? Infinity : nums2[j];
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
        const maxLeft = Math.max(maxLeft1, maxLeft2);
        const minRight = Math.min(minRight1, minRight2);
        return (m + n) % 2 === 0 ? (maxLeft + minRight) / 2 : maxLeft;
      } else if (maxLeft1 > minRight2) {
        right = i - 1;
      } else {
        left = i + 1;
      }
    }
    throw new Error('Arrays are not sorted');
  };
// @lc code=end

