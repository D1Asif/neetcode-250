class MyHashMap:

    def __init__(self):
        self.obj = {}

    def put(self, key: int, value: int) -> None:
        self.obj[key] = value

    def get(self, key: int) -> int:
        if self.obj.get(key) != None:
            return self.obj.get(key)
        else:
            return -1

    def remove(self, key: int) -> None:
        if self.obj.get(key) != None:
            del self.obj[key]