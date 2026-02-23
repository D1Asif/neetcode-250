class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let lowerS = s.split(" ").join("").toLowerCase();
        let modifiedS = "";

        for (let ch of lowerS) {
            if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
                modifiedS += ch;
            }
        }

        console.log(modifiedS)

        let i = 0;
        let j = modifiedS.length - 1;
        while(i < j) {
            if (modifiedS[i] !== modifiedS[j]) return false;
            i++;
            j--;
        }

        return true;
    }
}
