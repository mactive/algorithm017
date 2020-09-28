/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    const getArea = (start, end, val1, val2) => {
        let w = end - start
        let h = Math.min(val1, val2)
        return w * h
    }
    // 经典的所有两两组合情况
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            // 计算面基
            let area = getArea(i, j, height[i], height[j])
            max = Math.max(max, area)
        }
    }
    return max
};
// @lc code=end

// console.log(maxArea([1,7,3,5,4]))
