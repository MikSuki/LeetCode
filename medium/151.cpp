/**
    # 151. Reverse Words in a String
*/
class Solution {
public:
    string reverseWords(string s) {
       stack<string> stack;
       int i = 0;
       while(i < s.size()){
            while(s[i] == ' ') 
                ++i;
            string str;
            while(i < s.size() && s[i] != ' '){
                str += s[i];
                ++i;
            }
            stack.push(str);
        }
       string res;
       while(stack.size()){
           if(res.size()) res += ' ';
           res += stack.top();
           stack.pop();
       }

       return res;
    }
};
