class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        const mapObject = {}

        for (let i = 0; i < nums.length; i++) {
            if (mapObject[nums[i]] === true) {
                return result = true;
            }
            mapObject[nums[i]] = true;
        }

        return result;
    }
}
