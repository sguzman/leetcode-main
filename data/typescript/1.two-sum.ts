/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const findSum = (index: number, map: Map<number, number>): number[] => {
    if (index === nums.length) {
      throw new Error('No two sum solution');
    }
    const complement = target - nums[index];
    if (map.has(nums[index])) {
      return [map.get(nums[index])!, index];
    }
    map.set(complement, index);
    return findSum(index + 1, map);
  };
  return findSum(0, new Map<number, number>());
};
// @lc code=end

