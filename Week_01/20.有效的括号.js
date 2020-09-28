/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    let pairs = new Map([
        [')','('],
        ['}','{'],
        [']','[']
    ])
    let r = true
    let stk = [] // 栈
    s.split('').forEach(ch => {
        // 如果已经存在对应的key
        if(pairs.has(ch)) {
            // 处理例外
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                // r=false
                continue
                // return false;
            }
            // 默认应该是pop
            stk.pop()
        } else {
            stk.push(ch)
        }

    })

    // stk 栈为空的时候才能这样
    return r && !stk.length
};
// @lc code=end

console.log('isValid:', isValid('([}}])'))

