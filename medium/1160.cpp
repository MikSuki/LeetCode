/**
    # 1160. Find Words That Can Be Formed by Characters
*/

class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        vector<int> ch(26);
        int res = 0;

        setArr(ch, chars);

        for(string str : words){
            if(str.size() <= chars.size()){
                vector<int> tmp(26);
                setArr(tmp, str);
                if(cmp(tmp, ch)) res += str.size();
            }
        }

        return res;
    }

private:
    void setArr(vector<int> &arr, string str){
        for(char c : str)
            ++arr[c - 'a'];
    }

    bool cmp(vector<int> & a, vector<int> & ch){
        for(int i = 0; i < a.size(); ++i)
            if(a[i] > ch[i])
                return false;
        return true;
    }
};
