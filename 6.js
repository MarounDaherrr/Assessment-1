class LRUCache {
    constructor(capacity) {
      this.size = capacity;
      this.cache = [];
    }
  
    get(key) {
      for (let i = 0; i < this.cache.length; i++) {
        if (this.cache[i].key === key) {
          const item = this.cache.splice(i, 1)[0];
          this.cache.push(item); // move to most recent
          return item.value;
        }
      }
      return null;
    }
  
    put(key, value) {
      for (let i = 0; i < this.cache.length; i++) {
        if (this.cache[i].key === key) {
          this.cache.splice(i, 1);
          break;
        }
      }
  
      if (this.cache.length === this.size) {
        this.cache.shift(); // remove oldest
      }
  
      this.cache.push({ key, value });
    }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 1
cache.put(3, 3); // Removes key 2
cache.get(2); // null
console.log(cache);