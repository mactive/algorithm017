/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    let res = []

    if(nums == null || nums.length < 3) return res;

    nums.sort((a, b) => a - b); // 排序
    
    for (let k = 0; k < nums.length - 2; k++) {
        // 因为排过序, 我们遍历的数据都应该是小于0的
        if (nums[k] > 0) break;
        // 如果相邻两个数相同, 跳过. 不然会出现重复的组合
        if (k > 0 && nums[k] == nums[k - 1]) continue
        // 左右之争
        let L = k + 1, R = nums.length - 1
        while (L < R) {
            const sum = nums[k] + nums[L] + nums[R]
            if (sum < 0) {
                L++
            } else if (sum > 0) {
                R--
            } else {
                res.push([nums[k], nums[L], nums[R]])
                while (L<R && nums[L] == nums[L+1]) L++; // 右侧子组去重
                while (L<R && nums[R] == nums[R-1]) R--; // 右侧子组去重
                L++
                R--
            }
        } 
    }
    return res
};
// @lc code=end

threeSum([-1, 0, 1, 2, -1, -4])
threeSum([-2, 2, -1, 1])

