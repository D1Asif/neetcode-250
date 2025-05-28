class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const result = [];
        for (let i = 0; i < 2; i++) {
            for (let num of nums) {
                result.push(num)
            }
        }
        return result;
    }
}
