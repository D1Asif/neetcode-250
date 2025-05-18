class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const chars1 = {};
        for (let i = 0; i < s.length; i++) {
            chars1[s[i]] = chars1[s[i]] ? chars1[s[i]] + 1 : 1
        }

        const chars2 = {};
        for (let i = 0; i < t.length; i++) {
            chars2[t[i]] = chars2[t[i]] ? chars2[t[i]] + 1 : 1
        }

        for (let i = 97; i <= 122; i++) {
            if (chars1[String.fromCharCode(i)] || chars2[String.fromCharCode(i)]) {
                if (chars1[String.fromCharCode(i)] !== chars2[String.fromCharCode(i)]) {
                    return false;
                }
            }
        }

        return true;
    }
}
