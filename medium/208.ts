class Trie {
    root: object
    constructor() {
        this.root = {}
    }

    insert(word: string): void {
        let cur = this.root
        for(let i = 0; i < word.length; ++i){
            if(cur[word[i]])
                cur = cur[word[i]]
            else{
                const next = {}
                cur[word[i]] = next
                cur = next
            }
        }
        cur['$'] = true
    }

    search(word: string): boolean {
        let cur = this.root
        for(let i = 0; i < word.length; ++i){
            if(cur[word[i]])
                cur = cur[word[i]]      
            else
                return false
        }
        return cur['$'] == true
    }

    startsWith(prefix: string): boolean {
        let cur = this.root
        for(let i = 0; i < prefix.length; ++i){
            if(cur[prefix[i]])
                cur = cur[prefix[i]]      
            else
                return false
        }
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */