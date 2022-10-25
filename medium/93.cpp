#include <iostream>
#include <vector>

using namespace std;

class Solution {
   public:
    vector<string> v;
    int SIZE;
    vector<string> restoreIpAddresses(string s) {
        SIZE = s.size();
        getIp(s, "", 0, 0);
        return v;
    }

    void getIp(string s, string result, int idx, int count){
        if(count > 4) return;
        if(count == 4 && idx == SIZE) v.push_back(result);
        else if(count != 0) result += '.';
        string head;
        for(int i = 0; i < 4; ++i){
            if(idx + i >= SIZE) break;
            head += s.at(idx + i);
            if(stoi(head) < 256) getIp(s, result + head, idx + i + 1, count + 1);
            if(head.compare("0") == 0) break;
        }
    }
};

int main(){
    Solution s;
    // vector<string> v = s.restoreIpAddresses("25525511135");
    vector<string> v = s.restoreIpAddresses("0000");
    // vector<string> v = s.restoreIpAddresses("101023");
    for(auto it = begin(v); it != end(v); ++it){
        cout << *it << endl;
    }
    return 0;
}