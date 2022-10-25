/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    return dfs("", -1, 0);
    
    function dfs(str, i, len){
        if(!isUnique(str)) return len;
        len = str.length;
        if(i === arr.length - 1) return len;
        let max = 0;
        for(let j = i + 1; j < arr.length; ++j)
            max = Math.max(max, dfs(str + arr[j], j, len));
        return max;
    }

    function isUnique(str){
        let set = new Set();
        for(let c of str){
            if(set.has(c)) return false;        
            set.add(c);
        }
        return true;
    }
};

