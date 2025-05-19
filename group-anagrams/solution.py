# Not optimized solution. Got accepted in neetcode but rejected in Leetcode due otme limit exceedd.
class Solution:
    def isAnagram(self, str1, str2):
        if (len(str1) != len(str2)):
            return False

        hash1, hash2 = {}, {}
        for i in range(len(str1)):
            hash1[str1[i]] = 1 + hash1.get(str1[i], 0)
            hash2[str2[i]] = 1 + hash2.get(str2[i], 0)
        if (hash1 == hash2):
            return True

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = []

        for st in strs:
            matched = False
            if (len(result) == 0):
                result.append([st])
                continue

            for item in result:
                if (self.isAnagram(item[0], st) == True):
                    matched = True
                    item.append(st)
                    break

            if (matched == False):
                result.append([st])

        return result