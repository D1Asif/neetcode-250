class MyHashSet:

    def __init__(self):
        self.ara = []

    def add(self, key: int) -> None:
        self.ara.append(key)

    def remove(self, key: int) -> None:
        self.ara = [element for element in self.ara if element != key]

    def contains(self, key: int) -> bool:
        for element in self.ara:
            if element == key:
                return True
        return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)