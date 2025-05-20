class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let st of strs) {
            const letters = new Array(26).fill(0);

            for (let ch of st) {
                letters[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            const  key = letters.join(",");

            if (groups[key] === undefined) {
                groups[key] = []
            } 

            groups[key].push(st)
        }

        return Object.values(groups)
    }
}