class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zero = -1;
        let res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zero = i;
                continue;
            }
            product *= nums[i];
        }

        if (zero !== -1) {
            res = Array(nums.length).fill(0);
            res[zero] = product;
            return res;
        }

        for (let num of nums) {
            res.push(product / num)
        }
        return res;
    }
}
