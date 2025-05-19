// time complexity O(n^2)
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const subtractedArray = [...nums];
        for (let i = 0; i < nums.length; i++) {
            subtractedArray[i] = target - subtractedArray[i]
        }

        for (let i = 0; i < nums.length; i++) {
            if (subtractedArray.indexOf(nums[i]) !== -1 && subtractedArray.indexOf(nums[i]) !== i) {
                return [i, subtractedArray.indexOf(nums[i])]
            }
        }
    }
}
