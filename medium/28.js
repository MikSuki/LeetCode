/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const kmp = ((str) => {
        const arr = [0],
            len = str.length;
        let i = 1,
            j = 0;

        while (i < len) {
            if (str[i] === str[j]) {
                ++j;
                arr[i] = j;
                ++i;
            } else if (j === 0) {
                arr[i] = 0;
                ++i;
            } else {
                j = arr[j - 1];
            }
        }

        return arr;
    })(needle);

    const len_i = haystack.length,
        len_j = needle.length;
    let i = 0,
        j = 0;
    let cnt = 0;

    while (i < len_i /*&& j < len_j*/ ) {
        if (haystack[i] === needle[j]) {
            if (j === len_j - 1) return i - j;
            else {++i;++j; }
        } else {
            j = kmp[j - 1];
            if (j === undefined) j = 0;
            if (j === 0) {
                if (++cnt > 1) {
                    ++i;
                    cnt = 0;
                }
            }
        }
    }

    return -1;
};