/**
    # 1662. Check If Two String Arrays are Equivalent
*/
class Solution {
public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
        int i1 = 0, i2 = 0, j1 = 0, j2 = 0;
        while(i1 < word1.size() && i2 < word2.size()){
            if(word1[i1][j1] != word2[i2][j2])
                return false;
            if(++j1 >= word1[i1].size()){
                j1 = 0;
                ++i1;
            }
            if(++j2 >= word2[i2].size()){
                j2 = 0;
                ++i2;
            }
        }

        return i1 == word1.size() && i2 == word2.size();
    }
};
