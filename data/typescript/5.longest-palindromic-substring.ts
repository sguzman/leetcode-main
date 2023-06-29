/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    const n = s.length;
    const dp: boolean[][] = Array.from({ length: n }, () => new Array(n).fill(false));
    let longest = '';
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
      longest = s[i];
    }
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        if (s[i] === s[j] && (len === 2 || dp[i + 1][j - 1])) {
          dp[i][j] = true;
          if (len > longest.length) {
            longest = s.substring(i, j + 1);
          }
        }
      }
    }
    return longest;
  };
// @lc code=end

