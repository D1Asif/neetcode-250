class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = {};

    for (let num of nums) {
      count[num] = (count[num] || 0) + 1;
    }

    const ara = Object.entries(count).map(([num, count]) => [count, num]);

    ara.sort((a, b) => b[0] - a[0]);

    return ara.slice(0, k).map((item) => Number(item[1]));
  }
}
