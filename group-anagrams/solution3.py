class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}

        for st in strs:
            sorted_st = "".join(sorted(st))

            if (groups.get(sorted_st) == None):
                groups[sorted_st] = []
            
            groups[sorted_st].append(st)
        
        return list(groups.values())