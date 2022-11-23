/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

    class Trie {
        constructor() {
            this.root = {};
            this.isWord = false;
            words.forEach(word => this.addWord(word));
        }

        addWord(word) {
            let cur = this.root;
            for (const char of word) {
                if(!cur[char])
                    cur[char] = {};
                cur = cur[char];
            }
            cur.isWord = true;
        }
    }

    function dfs(i, j, node, subOutput) {
        if (i < 0 || j < 0 || i >= M || j >= N || !node[board[i][j]] || visited.has(i + ' ' + j))
            return;

        subOutput += board[i][j];
        node = node[board[i][j]];
        if (node.isWord) {
            output.add(subOutput);
            // return;
        }

        visited.add(i + ' ' + j);


        dfs(i - 1, j, node, subOutput);
        dfs(i + 1, j, node, subOutput);
        dfs(i, j - 1, node, subOutput);
        dfs(i, j + 1, node, subOutput);

        visited.delete(i + ' ' + j);
    }

    const trie = new Trie();
    const output = new Set();
    const visited = new Set();
    const M = board.length;
    const N = board[0].length;


    for(let i = 0; i < M; ++i)
        for(let j = 0; j < N; ++j)
            if(trie.root[board[i][j]])
                dfs(i, j, trie.root, '')

    return [...output];

};

const board = [["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]],
    words = ["oa","oaa"];

console.log(findWords(board, words));