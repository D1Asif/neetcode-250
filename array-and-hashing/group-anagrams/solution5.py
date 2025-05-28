# even through it has O(m * n) time complexity it is running slower than solution 3 (Time complexity O(m * nlogn)) on Leetcode
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)

        for st in strs:
            letters = [0] * 26

            for ch in st:
                letters[ord(ch) - ord("a")] += 1
            
            groups[tuple(letters)].append(st)

        return list(groups.values())
