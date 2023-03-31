class WordDictionary {
    root: Object

    constructor() {
        this.root = {}
    }

    addWord(word: string): void {
        let cur = this.root
        for(let i = 0; i < word.length; ++i){
            if(!cur[word[i]]) 
                cur[word[i]] = {}
            cur = cur[word[i]]
        }
        cur['$'] = true
    }

    search(word: string): boolean {
        function recur(cur: Object, i: number): boolean{
            if(word[i] == '.'){
                if(i == word.length - 1) return true
                for(const [key, val] of Object.entries(cur)){
                    if(recur(val, i + 1)) 
                        return true
                }
            }
            if(cur[word[i]]){
                if(i == word.length - 1) return true
                return recur(cur[word[i]], i + 1)
            }
            return false
        }
        word += '$'
        return recur(this.root, 0)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */