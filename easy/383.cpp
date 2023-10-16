/**
    383. Ransom Note
*/
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int arr[26];
        for(int i = 0; i < 26; ++i)
            arr[i] = 0;
        for(char c : magazine)
            arr[c - 'a']++;
        for(char c : ransomNote)
            if(--arr[c - 'a'] < 0) return false;
        return true;
    }
};
