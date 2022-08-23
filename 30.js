// sliding window
// 先找到第一個match
// 之後每 word_size 去比
// match
//      沒有-> map =  1，cnt++
//      重複 -> 滑到這格後，並刪掉前一個重複值前面的map，重算 cnt
// not match
//      刪掉全部 map，再重新開始找第一個match，cnt = 0


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const map = new Map(),
        goal = new Map(),
        len = s.length,
        word_size = words[0].length,
        max = words.length,
        output = [];

    const cleanMap = () => map.forEach((v, k) => map.set(k, 0));
    const getFirstMatch = () => {
        while (i < len) {
            const sub = s.substring(i, i + word_size);
            if (map.has(sub)) {
                map.set(sub, 1);
                cnt = 1;
                break;
            }
            ++i;
        }
        start = i;
        i += word_size;
    };
    const removeUntilRepeat = repeat => {
        let j = start;
        while (true) {
            const sub = s.substring(j, j + word_size);
            j += word_size;
            if (sub === repeat) break;
            map.set(sub, map.get(sub) - 1);
            --cnt;
        }
        start = j;
    };

    words.forEach(word => {
        map.set(word, 0);
        if (goal.get(word) === undefined)
            goal.set(word, 1);
        else
            goal.set(word, goal.get(word) + 1);
    });
    // find first match
    let i = 0, cnt = 0, start;
    getFirstMatch();
    if(max === 1){
        output.push(start);
        i = start + word_size;
        while(i < len){
            getFirstMatch();
            i += word_size;
        }
    }
    // console.log(i, start)
    // sliding window
    for (; i < len; i += word_size) {
        const sub = s.substring(i, i + word_size),
            status = map.get(sub);
        // console.log(i, sub, status)
        if (status === undefined) {
            start += 1;
            i = start;
            cleanMap();
            getFirstMatch();
            i -= word_size;
            // console.log(map)
            // console.log(cnt)
            // console.log('i: ' + i)
        }
        else if (status < goal.get(sub)) {
            map.set(sub, map.get(sub) + 1);
            // console.log('cnt: ' + cnt)
            if (++cnt === max) {
                output.push(start);
                const str = s.substring(start, start + word_size),
                    next_str = s.substring(start + 1, start + word_size + 1);

                if (str !== next_str) {
                    map.set(str, map.get(str) - 1);
                    start += word_size;
                    --cnt;
                }
                else {
                    start += 1;
                    i = start;
                    cleanMap();
                    getFirstMatch();
                    i -= word_size;
                }
            }
        }
        else {
            // removeUntilRepeat(sub);
            start += 1;
            i = start;
            cleanMap();
            getFirstMatch();
            i -= word_size;
        }
    }
    // console.log(cnt, max)
    if (cnt === max) output.push(start);
    // console.log(i);
    // console.log(map)
    return output;
};


console.log(findSubstring("abarfoothefoobarman", ["foo", "bar"]))
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))
console.log(findSubstring('wordgoodgoodgoodbestword', ["word", "good", "best", "word"]));
console.log(findSubstring('barfoofoobarthefoobarman', ["bar", "foo", "the"]));
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]))
console.log(findSubstring('a', ['a']))
console.log(findSubstring("aaaaaaaaaaaaaa", ["aa", "aa"]))
console.log(findSubstring("ababaab", ["ab","ba","ba"]))
console.log(findSubstring("mississippi", ["is"]));
