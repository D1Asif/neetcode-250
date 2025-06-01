class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (let str of strs) {
            encoded += str.length + "#" + str
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let word = "";
        let count = "";

        for (let i = 0; i < str.length; i++) {
            while (str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) {
                count += str[i];
                i++;
            }

            if (str[i] === "#") {
                count = Number(count);
                i++;
            }

            while (count > 0) {
                word += str[i];
                i++;
                count--;
            }

            if (count === 0) {
                decoded.push(word);
                count = "";
                word = "";
                i--;
            }
        }

        return decoded;
    }
}