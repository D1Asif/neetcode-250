class MyHashSet:

    def __init__(self):
        self.ara = [] * 1000001

    def add(self, key: int) -> None:
        self.ara[key] = True

    def remove(self, key: int) -> None:
        self.ara[key] = False

    def contains(self, key: int) -> bool:
        return self.ara[key]