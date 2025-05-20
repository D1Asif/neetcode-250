class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = {}

        for (let str of strs) {
            const sorted = str.split("").sort().join("")

            if (group[sorted] === undefined) {
                group[sorted] = []
            }

            group[sorted].push(str)
        }

        return Object.values(group)
    }
}