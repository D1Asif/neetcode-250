class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
            let match = "";
            for (let j = 0; j < strs[i].length; j++) {
                if (prefix[j] === strs[i][j]) {
                    match += prefix[j]
                } else {
                    break;
                }
            }
            prefix = match
        }

        return prefix;
    }
}
