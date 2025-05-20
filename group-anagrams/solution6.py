# joining with "" instead of "," can lead to error for strings where there are 10 or more instances of a signle character in a string.
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)

        for st in strs:
            letters = [0] * 26

            for ch in st:
                letters[ord(ch) - ord("a")] += 1
            
            groups[",".join(str(x) for x in letters)].append(st)

        return list(groups.values())
