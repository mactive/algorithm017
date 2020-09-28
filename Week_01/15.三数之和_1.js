/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start

/**
 * 暴力法 
 * 枚举 a b c
 * 返回不重复的三元组,
 * 两重暴力 + hash 
 * 穷举所有 a + b  = -c
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    let arr = []
    if (nums == null || nums.length < 3) return arr;
    nums.sort((a, b) => a - b)
    for (var i = 0; i < nums.length - 2; i++) {
        const hashMap = new Map()
        if (nums[i] > 0) break;
        // 去重处理
        if (i > 0 && nums[i] == nums[i - 1]) continue
        for (var j = i + 1; j < nums.length; j++) {
            const dif = -(nums[i] + nums[j])
            // 去重处理
            // 因为hashMap是首次记录第二次才会push到数组，所以需要判断只有三次重复才能continue
            if (j > i + 2 && nums[j] == nums[j - 1] && nums[j] == nums[j - 2])
                continue
            if (hashMap.has(dif)) {
                arr.push([nums[i], nums[hashMap.get(dif)], nums[j]])
                hashMap.delete(dif)
            }
            hashMap.set(nums[j], j)
        }
    }
    return arr
};
threeSum([-1, 0, 1, 2, -1, -4])
threeSum([-2, 2, -1, 1])

