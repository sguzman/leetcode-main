/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    if (numRows === 1) {
      return s;
    }
    const rows: string[] = Array.from({ length: numRows }, () => '');
    let row = 0;
    let direction = -1;
    for (let i = 0; i < s.length; i++) {
      rows[row] += s[i];
      if (row === 0 || row === numRows - 1) {
        direction = -direction;
      }
      row += direction;
    }
    return rows.join('');
  };
// @lc code=end

