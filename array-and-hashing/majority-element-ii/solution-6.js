class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);

            if (map.size > 2) {
                const newMap = new Map();
                for (let key of map.keys()) {
                    if (map.get(key) > 1) {
                        newMap.set(key, map.get(key) - 1)
                    }
                }
                map = newMap;
            }
        }

        const res = [];
        for (let key of map.keys()) {
            if (nums.filter((num) => num === key).length > Math.floor(nums.length / 3)) {
                res.push(key);
            }
        }

        return res;
    }
}
