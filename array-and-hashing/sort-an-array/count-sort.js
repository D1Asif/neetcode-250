class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    const countMap = new Map();
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    for (let num of nums) {
        if (!countMap.has(num)) {
            countMap.set(num, 0)
        }
        countMap.set(num, countMap.get(num) + 1)
    }

    let index = 0;
    for (let i = min; i <= max; i++) {
        while(countMap.get(i) > 0) {
            nums[index] = i;
            index++;
            countMap.set(i, countMap.get(i) - 1)
        }
    }

    return nums;
  }
}
