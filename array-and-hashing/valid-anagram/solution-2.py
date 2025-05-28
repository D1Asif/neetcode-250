class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        chars1, chars2 = {}, {}
        
        for i in range(len(s)):
            chars1[s[i]] = 1 + chars1.get(s[i], 0)
            chars2[t[i]] = 1 + chars2.get(t[i], 0)

        for key, value in chars1.items():
            if (chars1.get(key) != chars2.get(key)):
                return False

        return True