/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(heights.length < 2) return heights[0] || 0
    if(heights.length === 2) return Math.min(heights[0], heights[1]) * 2
    // let left = 0, right = heights.length - 1
    let max = 0
    for (let i = 0; i < heights.length-2; i++) {
        for (let j = i + 1; j < heights.length-1; j++) {
            let area = Math.min(heights[i], heights[j]) * 2
            max = Math.max(max, area)
        }
    }
    return max
};
// @lc code=end

largestRectangleArea([1,1])